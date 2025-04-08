interface Props {
  gridSize: number;
  grid: string[];
  handleGridChange: (newGridSize: number) => void;
}
export default function Options(props: Props) {
  const { gridSize, handleGridChange } = props;
  return (
    <div className="flex flex-col justify-start items-start flex-nowrap gap-8 ">
      {/* <label>Pick color:</label> */}
      {/* <input
      type="color"
      value={currentColor}
      onChange={(e) => setcurrentColor(e.target.value)}
    /> */}
      <div className=" optionsButtons flex flex-row justify-start items-start flex-wrap gap-2 w-md">
        <button
          type="button"
          className="snes-button"
          onClick={() => {
            if (confirm("Press a button!\nEither OK or Cancel.")) {
              handleGridChange(0);
              console.log("changed");
            }
          }}
        >
          Clear
        </button>
        <button type="button" className="snes-button">
          Save
        </button>
        <button type="button" className="snes-button">
          Mint
        </button>
      </div>
      <div className="flex gap-3 pt-3 text-phantom-color text-2xl">
        <label >Pick grid size:</label>
        <input
          min="0"
          max="64"
          type="number"
          value={gridSize}
          onChange={(e) => handleGridChange(+e.target.value)}
          className="text-black"
        />
      </div>
    </div>
  );
}
