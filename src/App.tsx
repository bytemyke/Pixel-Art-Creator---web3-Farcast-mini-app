import { sdk } from "@farcaster/frame-sdk";
import { useState, useEffect, useRef } from "react";
import { useAccount, useConnect, useSignMessage } from "wagmi";
import { Dotting, DottingRef, useDotting, BrushTool } from "dotting";
import Options from "./components/Options";
import Palette from "./components/Palette";
import ToolPicker from "./components/ToolPicker";

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);
  const [currentColor, setCurrentColor] = useState("#FF");
  const ref = useRef<DottingRef>(null);
  const { clear, downloadImage,undo,redo } = useDotting(ref);
  const [brushTool, setBrushTool] = useState<BrushTool>("DOT");
  return (
    <div id="app" className="snes-blockquote has-galaxy-bg">
      <div className="flex flex-row justify-between items-start flex-wrap gap-4">
        <header className="text-phantom-color">
          <h1 className="text-4xl">Pixel Art Creator</h1>
        </header>
        <Options clear={clear} downloadImage={downloadImage} />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 h-[80vh]">
        <Palette
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
        <ToolPicker setBrushTool={setBrushTool} undo={undo} redo={redo}  />
        <Dotting
          ref={ref}
          isGridFixed={false}
          brushColor={currentColor}
          brushTool={brushTool}
          width={"90%"}
          height={"90%"}
          backgroundColor={"#000000"}
        />
      </div>
      <ConnectMenu />
    </div>
  );
}

function ConnectMenu() {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();

  if (isConnected) {
    return (
      <>
        <div>Connected account:</div>
        <div>{address}</div>
        <SignButton />
      </>
    );
  }

  return (
    <button
      className="snes-link text-phantom-color"
      type="button"
      onClick={() => connect({ connector: connectors[0] })}
    >
      Connect
    </button>
  );
}

function SignButton() {
  const { signMessage, isPending, data, error } = useSignMessage();

  return (
    <>
      <button
        type="button"
        onClick={() => signMessage({ message: "hello world" })}
        disabled={isPending}
      >
        {isPending ? "Signing..." : "Sign message"}
      </button>
      {data && (
        <>
          <div>Signature</div>
          <div>{data}</div>
        </>
      )}
      {error && (
        <>
          <div>Error</div>
          <div>{error.message}</div>
        </>
      )}
    </>
  );
}

export default App;
