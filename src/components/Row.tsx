import Pixel from "./Pixel";

interface Props {
  selectedColor: string;
  width: number;  
  editing: boolean;
  brushTool: string
}

export default function Row(props : Props) {
  const { width, selectedColor, editing, brushTool} = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} editing={editing} brushTool={brushTool}/>);
  }

  return <div className="row">{pixels}</div>;
}
