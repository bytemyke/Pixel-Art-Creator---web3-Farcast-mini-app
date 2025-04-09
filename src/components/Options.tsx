import { ImageDownloadOptions } from "dotting/build/src/components/Canvas/types";
interface Props {
  clear: () => void;
  downloadImage: (options: ImageDownloadOptions) => void;
}
export default function Options(props: Props) {
  const { clear, downloadImage } = props;
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
              clear();
              console.log("changed");
            }
          }}
        >
          Clear
        </button>
        <button
          type="button"
          className="snes-button"
          onClick={() => downloadImage({ isGridVisible: false, type: "png" })}
        >
          Save
        </button>
        <button type="button" className="snes-button">
          Mint
        </button>
      </div>
    </div>
  );
}
