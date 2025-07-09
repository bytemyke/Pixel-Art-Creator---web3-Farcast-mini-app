import { useState, useRef } from "react";

interface Props {
  selectedColor: string;
  editing: {
    current: boolean;
  }
}

export default function Pixel(props : Props) {
  const { selectedColor, editing } = props;

  const [pixelColor, setPixelColor] = useState("#ffffff00");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  function applyColor() {
    setPixelColor(selectedColor);
    setCanChangeColor(false);
  }

  function changeColorOnHover() {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  }

  function resetColor() {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }

    setCanChangeColor(true);
  }

  return (
    <div
      className="pixel"
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor, border: editing.current === true ? '.1rem solid black' : 'none' }}
      
    ></div>
  );
}
