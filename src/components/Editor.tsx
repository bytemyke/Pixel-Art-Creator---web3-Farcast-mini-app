import { useState } from "react";
import "../css/editor.scss";
// @ts-ignore
import { CirclePicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
import ColorPalletEditor from "./ColorPaletteEditor";
import ToolPicker from "./ToolPicker";

interface color {
  hex: string;
}
export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#fff");
  const [colorPallet, setColorPallet] = useState(["#ffffff", "#000000"]);
  const [brushTool, setBrushTool] = useState("DOT");

  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  }

  function changeColor(color: color) {
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
              max="99"
              onChange={(e) => {
                if (parseInt(e.target.value) > 99) {
                  e.target.value = "99";
                }
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
              max="99"
              onChange={(e) => {
                if (parseInt(e.target.value) > 99) {
                  e.target.value = "99";
                }
                setPanelHeight(parseInt(e.target.value));
              }}
            />
            <span>Height</span>
          </div>
        </div>
      )}

      <button
        onClick={initializeDrawingPanel}
        className="snes-button has-plumber-color"
      >
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
          <ToolPicker setBrushTool={setBrushTool} />
        </>
      )}

      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
          brushTool={brushTool}
        />
      )}
    </div>
  );
}
