import React from 'react'
import { BrushTool } from "dotting";
import fillLogo from "../assets/fill-drip.svg";
import lineLogo from "../assets/linear.svg";
import paintLogo from "../assets/paint-brush.svg";
import rectangleLogo from "../assets/rectangle.svg";
import ellipseLogo from "../assets/ellipse.svg";
import redoLogo from "../assets/redo.svg";
import undoLogo from "../assets/undo.svg";
import eraser from "../assets/eraser.svg";
/*
Supported Brush Options:
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
    setBrushTool: (brushTool: BrushTool) => void;
    undo: () => void;
    redo: () => void;
}
export default function ToolPicker(props: Props) {
    const { setBrushTool, undo, redo } = props;
  return (
    <div id = "toolPicker" className='flex flex-row justify-center items-center'>
        <img src={undoLogo} className="undo toolLogo" alt="Undo" onClick={() => undo()} />
        <img src={paintLogo} className="paint toolLogo" alt="Paint" onClick={() => setBrushTool("DOT")} />
        <img src={eraser} className="eraser toolLogo" alt="Eraser" onClick={() => setBrushTool("ERASER")} />
        <img src={lineLogo} className="line toolLogo" alt="Line" onClick={() => setBrushTool("LINE")} /> 
        <img src={fillLogo} className="paint-bucket toolLogo" alt="Paint Bucket" onClick={() => setBrushTool("PAINT_BUCKET")} />
        <img src={rectangleLogo} className="rectangle toolLogo" alt="Rectangle" onClick={() => setBrushTool("RECTANGLE")} />
        <img src={ellipseLogo} className="ellipse toolLogo" alt="Ellipse" onClick={() => setBrushTool("ELLIPSE")} />
        <img src={redoLogo} className="redo toolLogo" alt="Redo" onClick={() => redo()}/>

    </div>
  )
}
