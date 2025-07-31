import { useRef } from "react";
// import fillLogo from "../assets/fill-drip.svg";
// import lineLogo from "../assets/linear.svg";
import paintLogo from "../assets/paint-brush.svg";
// import rectangleLogo from "../assets/rectangle.svg";
// import ellipseLogo from "../assets/ellipse.svg";
// import redoLogo from "../assets/redo.svg";
// import undoLogo from "../assets/undo.svg";
import eraser from "../assets/eraser.svg";
/*
REFERENCE - Supported Brush Options:
DOT = "DOT",
ERASER = "ERASER",
PAINT_BUCKET = "PAINT_BUCKET",
SELECT = "SELECT",
NONE = "NONE",
LINE = "LINE",
RECTANGLE = "RECTANGLE",
RECTANGLE_FILLED = "RECTANGLE_FILLED",
ELLIPSE = "ELLIPSE",
ELLIPSE_FILLED = "ELLIPSE_FILLED" 
*/
interface Props {
  setBrushTool: (brushTool: string) => void;
}

export default function ToolPicker(props: Props) {
  const {setBrushTool} = props;
  const selectedTool = useRef("paint");
  return (
    <div id="toolPicker" className="nowrap">
      <img
        src={paintLogo}
        className={`paint toolLogo ${selectedTool.current === "paint" ? "selected" : ""}`}
        alt="Paint"
        title="Paint"
        onClick={() => {
          selectedTool.current = "paint";
          setBrushTool("DOT");
        }}
      />
      <img
        src={eraser}
        className={`eraser toolLogo ${selectedTool.current === "eraser" ? "selected" : ""}`}
        alt="Eraser"
        title="Eraser"
        onClick={() => {
          selectedTool.current = "eraser";
          setBrushTool("ERASER");
        }}
      />
      {/* <img
        src={lineLogo}
        className={`line toolLogo ${selectedTool.current === "line" ? "selected" : ""}`}
        alt="Line"
        title="Line"
        onClick={() => {
          selectedTool.current = "line";
          setBrushTool("LINE");
        }}
      /> */}
      {/* <img
        src={fillLogo}
        className={`paint-bucket toolLogo ${selectedTool.current === "paint-bucket" ? "selected" : ""}`}
        alt="Paint Bucket"
        title="Paint Bucket"
        onClick={() => {
          selectedTool.current = "paint-bucket";
          setBrushTool("PAINT_BUCKET");
        }}
      /> */}
      {/* <img
        src={rectangleLogo}
        className={`rectangle toolLogo ${selectedTool.current === "rectangle" ? "selected" : ""}`}
        alt="Rectangle"
        title="Rectangle"
        onClick={() => {
          selectedTool.current = "rectangle";
          setBrushTool("RECTANGLE");
        }}
      />
      <img
        src={ellipseLogo}
        className={`ellipse toolLogo ${selectedTool.current === "ellipse" ? "selected" : ""}`}
        alt="Ellipse"
        title="Ellipse"
        onClick={() => {
          selectedTool.current = "ellipse";
          setBrushTool("ELLIPSE");
        }}
      /> */}
    </div>
  );
}
