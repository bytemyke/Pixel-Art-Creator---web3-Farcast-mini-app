import { useRef, useState } from "react";
import Row from "./Row";
import html2canvas from "html2canvas-pro";

interface Props {
  width: number;
  height: number;
  selectedColor: string;
}

const exportComponentAsPNGz = (
  elementRef: React.RefObject<HTMLElement>,
  setEditing: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (elementRef.current) {
    html2canvas(elementRef.current, { backgroundColor: null }).then(
      (canvas) => {
        setEditing(false);
        // editing.current =) false;
        const link = document.createElement("a");
        link.download = "pixel-art.png";
        setTimeout(() => {
                  if (window.confirm("Are you sure you want to download this image?")) {
          link.href = canvas.toDataURL("image/png");
          link.click();
          setEditing(true);
          return;
        } else{
          setEditing(true);
          return;
        }
        }, 100);
      }
    );
  }
};

export default function DrawingPanel(props: Props) {
  const { width, height, selectedColor } = props;

  const panelRef = useRef<HTMLDivElement>(null);
  const [editing, setEditing] = useState(true);

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(
      <Row
        key={i}
        width={width}
        selectedColor={selectedColor}
        editing={editing}
      />
    );
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <button
        onClick={() => {
          exportComponentAsPNGz(panelRef, setEditing);
        }}
        className="button"
      >
        Export as PNG
      </button>
    </div>
  );
}
