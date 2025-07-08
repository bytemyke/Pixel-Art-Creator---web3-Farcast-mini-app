import { useState } from "react";
import Pixel from "./Pixel";

interface Props {
  selectedColor: string;
  width: number;  
}

export default function Row(props : Props) {
  const { width, selectedColor } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }

  return <div className="row">{pixels}</div>;
}
