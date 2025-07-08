//todo add mint functionality

import { ImageDownloadOptions } from "dotting/build/src/components/Canvas/types";
interface Props {
  clear: () => void;
  downloadImage: (options: ImageDownloadOptions) => void;
}
/**
 * Options component that allows the user to clear the canvas,
 * download, and mint the image.
 *
 * @param {Props} props The props object
 * @param {Function} props.clear Clear the canvas
 * @param {Function} props.downloadImage Download the image from the canvas
 * @returns {JSX.Element} The options component
 */

export default function Options(props: Props) {
  const { clear, downloadImage } = props;
  return (
      <div className="optionsButtons grid-container thirds">
        <button
          type="button"
          className="snes-button"
          onClick={() => {
            if (confirm("This will delete your canvas, are you sure?")) {
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
  );
}