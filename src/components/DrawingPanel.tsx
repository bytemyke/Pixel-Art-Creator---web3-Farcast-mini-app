import  { useRef } from "react";
// @ts-ignore
import Row from "./Row";
import { exportComponentAsPNG } from "react-component-export-image";


interface Props {
  width: number;
  height: number;
  selectedColor: string;
}


export default function DrawingPanel(props : Props) {
  const { width, height, selectedColor } = props;

  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <button onClick={() => exportComponentAsPNG(panelRef)} className="button">
        Export as PNG
      </button>
    </div>
  );
}
