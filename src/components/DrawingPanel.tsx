import  { useRef } from "react";
import Row from "./Row";
import html2canvas from 'html2canvas-pro';


interface Props {
  width: number;
  height: number;
  selectedColor: string;
}

const exportComponentAsPNGz = (elementRef: React.RefObject<HTMLElement>) => {
  if (elementRef.current) {
    html2canvas(elementRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'pixel-art.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }
};

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
      <button onClick={() => {exportComponentAsPNGz(panelRef); console.log(panelRef);}} className="button">
        Export as PNG
      </button>
    </div>
  );
}
