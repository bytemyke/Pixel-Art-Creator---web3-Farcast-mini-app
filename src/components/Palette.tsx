import { useState } from "react"
import ColorPaletteEditor from "./ColorPaletteEditor";
// colorPallet: string[],
// setColorPallet: (newCollorPallet: string[]) => void
interface Props {
    currentColor: string;
    setCurrentColor: (newColor: string) => void
}
export default function Palette(props:Props) {
    const {currentColor, setCurrentColor} = props;
    const [colorPallet, setColorPallet] = useState(["#fff", "#000", "#f00", "#0f0", "#00f", "#ff0"]);
    console.log(currentColor);
  return (
    <div className = "pallet flex gap-0.5">
        {/* <ColorPaletteEditor colorPallet={colorPallet} setColorPallet={setColorPallet} /> */}
        {colorPallet.map((color) => (
          <div
            key={color}
            className="colorOption w-10 h-10 cursor-pointer hover:opacity-25"
            style={{ backgroundColor: color }}
            onClick={() => setCurrentColor(color)}
          />
        ))}
    </div>
  )
}
