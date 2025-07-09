import { useState } from "react";
import "../css/editor.scss";
// @ts-ignore
import { CirclePicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
import ColorPalletEditor from "./ColorPaletteEditor";


interface color {
  hex : string
}
export default function Editor() {
  const DEFAULT_COLOR = '#ffffff00'
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState(DEFAULT_COLOR);
  const [colorPallet, setColorPallet] = useState([
    "#fff",
    "#000",
    "#f00",
    "#0f0",
    "#00f",
    "#ff0",
  ]);

  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  }

  function changeColor(color : color) {
    setColor(color.hex);
  }

  return (
    <div id="editor">
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(parseInt(e.target.value));
              }}
            />
            <span>Width</span>
          </div>
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(parseInt(e.target.value));
              }}
            />
            <span>Height</span>
          </div>
        </div>
      )}

      <button onClick={initializeDrawingPanel} className="snes-button has-plumber-color">
        {buttonText}
      </button>

      {hideOptions && (
        <>
          <ColorPalletEditor
            colorPallet={colorPallet}
            setColorPallet={setColorPallet}
          />
          <CirclePicker
            colors={colorPallet}
            color={selectedColor}
            onChangeComplete={changeColor}
          />
        </>
      )}

      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
}
