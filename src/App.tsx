import { sdk } from "@farcaster/frame-sdk";
import { useState, useEffect, useRef } from "react";
import { useAccount, useConnect, useSignMessage } from "wagmi";
import Editor from "./components/Editor";

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);
  // const ref = useRef<DottingRef>(null);
  // const { clear, downloadImage,undo,redo } = useDotting(ref);
  const [brushTool, setBrushTool] = useState("DOT");
  return (
    <div id="app" className="snes-blockquote has-galaxy-bg">
      <div className="grid-container halves">
        <header className="text-phantom-color">
          <h1>Pixel Art Creator</h1>
        </header>
      </div>
      <div id="main">
        <Editor></Editor>
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
