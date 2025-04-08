interface Props {
  colorPallet: string[];
  setColorPallet: (newCollorPallet: string[]) => void;
}
export default function coloPaletteEditor(props: Props) {
  const { colorPallet, setColorPallet } = props;
  return <div>coloPaletteEditor</div>;
}
