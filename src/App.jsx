import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Experience } from './components/Experience';
import { Overlay } from './components/Overlay';
//import CanvasPage from './canvas';
//import Customizer from './pages/Customizer';
import RenderPage from './render';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/canvas" element={<RenderPage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Leva hidden />
      <Overlay />
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
