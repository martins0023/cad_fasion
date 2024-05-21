import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import { useLocation } from 'react-router-dom';

import Shirt from './Shirt';
import Long_dress_with_long_sleeves from './Long_dress_with_long_sleeves';
import Long_dress_with_one_long_sleeve from './Long_dress_with_one_long_sleeve';
import Model from './Model';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const initialModel = queryParams.get('model') || 'Long_dress_with_long_sleeves';
  const [selectedModel, setSelectedModel] = useState(initialModel);

  useEffect(() => {
    setSelectedModel(initialModel);
  }, [initialModel]);

  const renderModel = () => {
    switch (selectedModel) {
      case 'Long_dress_with_long_sleeves':
        return <Long_dress_with_long_sleeves />;
      case 'Long_dress_with_one_long_sleeve':
        return <Long_dress_with_one_long_sleeve />;
      case 'Model':
        return <Model />;
      default:
        return <Long_dress_with_long_sleeves />;
    }
  };

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 20], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          {renderModel()}
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel