import { useState, useRef } from "react";

interface Props {
  selectedColor: string;
  editing:  boolean;
  
}

export default function Pixel(props : Props) {
  const { selectedColor, editing } = props;
  const drawing = useRef(false);
  const [pixelColor, setPixelColor] = useState("#ffffff00");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);
    document.addEventListener('mousedown', () => {
      drawing.current = true;
    });
    document.addEventListener('mouseup', () => {
      drawing.current = false;
    });
  function applyColor() {
    setPixelColor(selectedColor);
    setCanChangeColor(false);
  }

  function changeColorOnHover() {
    if (drawing.current == true) return applyColor();
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
      style={{ backgroundColor: pixelColor, border: editing === true ? '.1rem solid black' : 'none' }}
      
    ></div>
  );
}
