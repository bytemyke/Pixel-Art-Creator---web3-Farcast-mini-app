import { useRef } from "react";
interface Props {
  colorPallet: string[];
  setColorPallet: (newCollorPallet: string[]) => void;
}
/**
 * A component to edit the color palette.
 *
 * @param {Object} props - Component props
 * @param {string[]} props.colorPallet - The current color palette
 * @param {(newCollorPallet: string[]) => void} props.setColorPallet - A function to update the color palette
 * @returns {JSX.Element} The component
 */
export default function ColorPaletteEditor(props: Props) {
  const { colorPallet, setColorPallet } = props;
  return (
    <div className="colorEditorOptions">
      <ColorPalletEditorOptions
        colorPallet={colorPallet}
        setColorPallet={setColorPallet}
      />
    </div>
  );
}

/**
 * A component to select a color and add it to the color palette.
 *
 * @param {Object} props - Component props
 * @param {string[]} props.colorPallet - The current color palette
 * @param {(newCollorPallet: string[]) => void} props.setColorPallet - A function to update the color palette
 * @returns {JSX.Element} The component
 */
const ColorPalletEditorOptions = (props: Props) => {
  const { colorPallet, setColorPallet } = props;
  const selectedColor = useRef("#000000");
  return (
    <>
      <label className="text-turquoise-color">Choose your color: </label>
      <div className = 'selector'>
        <input
          type="color"
          onChange={(e) => (selectedColor.current = e.target.value)}
        />
        <button
          type="button"
          className="snes-button tiny"
          onClick={() =>
            !colorPallet.includes(selectedColor.current) &&
            setColorPallet([...colorPallet, selectedColor.current])
          }
        >
          +
        </button>
      </div>
    </>
  );
};
