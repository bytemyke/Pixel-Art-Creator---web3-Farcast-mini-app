import { useState } from "react";
import Pixel from "./Pixel";

interface Props {
  selectedColor: string;
  width: number;  
  editing: {
    current: boolean;
  }
}

export default function Row(props : Props) {
  const { width, selectedColor, editing } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} editing={editing} />);
  }

  return <div className="row">{pixels}</div>;
}
