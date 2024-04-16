import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        /*presetColors={[
          "#ccc",
          "#000000",
          "#EFBD4E",
          "#726DE8"
        ]}*/
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker