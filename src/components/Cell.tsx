interface Props {
  currentColor: string;
  mouseDownRef: any;
  color: string
}
export default function Cell(props: Props) {
  const { currentColor, mouseDownRef, color } = props;
  const handleCellClick = (e: any) => {
    e.target.style.backgroundColor = currentColor
  };
  return (
    <div
      onMouseDown={(e) => handleCellClick(e)}
      onMouseOver={(e) => mouseDownRef.current == true && handleCellClick(e)}
      className="border cell cursor-pointer hover:opacity-25"
      style={{ backgroundColor: color }}
    ></div>
  );
}
