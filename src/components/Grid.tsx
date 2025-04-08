import { useRef } from "react";
import Cell from "./Cell";
interface Props{
    currentColor: string,
    gridSize: number,
    grid: string[],
}

export default function Grid(props: Props) {
    const { currentColor, gridSize, grid } = props;
    const mouseDownRef = useRef(false);

    return (
        <>
        <div
          onMouseLeave={() => (mouseDownRef.current = false)}
          onMouseDown={() => (mouseDownRef.current = true)}
          onMouseUp={() => (mouseDownRef.current = false)}
          className="grid w-[30rem] h-[30rem]"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          }}
        >
          {grid.map((color,index) => (
            <Cell
            mouseDownRef={mouseDownRef}
            key={index}
            currentColor={currentColor}
            color = {color}
            />
          ))}
        </div>
        </>
    );
}
