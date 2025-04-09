import { useState,useRef } from "react";
interface Props {
  colorPallet: string[];
  setColorPallet: (newCollorPallet: string[]) => void;
}
export default function coloPaletteEditor(props: Props) {
  const { colorPallet, setColorPallet } = props;
  return (
    <section className="customBlockquoteContainer relative z-20 overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <AccordionItem
              colorPallet={colorPallet}
              setColorPallet={setColorPallet}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>

          </defs>
        </svg>
      </div>
    </section>
  );
}
const AccordionItem = (props: Props) => {
  const { colorPallet, setColorPallet } = props;
  console.log(colorPallet, setColorPallet);
  const [active, setActive] = useState(false);
  const handleToggle = (e: any) => {
    e.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg p-4  sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={handleToggle}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg  text-primary ">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold">
            Edit palette
          </h4>
        </div>
      </button>

      <div
        className={`accordionContent pl-[62px] duration-500 ease-in-out ${
          active ? "h-50" : "h-0"
        }`}
      >
        <ColorPalletEditorOptions
          colorPallet={colorPallet}
          setColorPallet={setColorPallet}
        />
      </div>
    </div>
  );
};

const ColorPalletEditorOptions = (props: Props) => {
  const { colorPallet, setColorPallet } = props;
  const selectedColor = useRef("#000000");
  return <>
        <div className="pallet flex gap-0.5">
        {colorPallet.map((color) => (
          <div
            key={color}
            className="colorOption w-10 h-10 cursor-pointer hover:opacity-25"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <label className = 'text-turquoise-color'>Select your color: </label>
      <input
          type="color"
          onChange={(e) => selectedColor.current = e.target.value}
        />
        <button
          type="button"
          className="snes-button tiny"
          onClick={() => setColorPallet([...colorPallet, selectedColor.current])}
        >
          +
        </button>
  </>;
};
