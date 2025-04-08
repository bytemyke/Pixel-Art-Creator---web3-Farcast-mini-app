import { sdk } from "@farcaster/frame-sdk";
import { useState, useEffect } from "react";
import { useAccount, useConnect, useSignMessage } from "wagmi";
import Options from "./components/Options";
import Grid from "./components/Grid";
import Palette from "./components/Palette";

const DEFAULT_GRID_COLOR = "#FF";
function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);
  const [currentColor, setCurrentColor] = useState("#FF");
  const [gridSize, setGridSize] = useState(16);
  const [grid, setGrid] = useState(
    Array(gridSize * gridSize).fill(DEFAULT_GRID_COLOR)
  );
  const handleGridChange = (newGridSize: number) => {
    setGridSize(newGridSize);
    setGrid(Array(newGridSize * newGridSize).fill(DEFAULT_GRID_COLOR));
  };
  return (
    <>
      <div className="flex flex-row justify-between items-start flex-wrap gap-4">
        <header className="text-phantom-color"><h1 class = 'text-4xl'>Pixel Art Creator</h1></header>
        <Options
          gridSize={gridSize}
          grid={grid}
          handleGridChange={handleGridChange}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <Palette
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
        <Grid currentColor={currentColor} gridSize={gridSize} grid={grid} />
      </div>
      <ConnectMenu />
    </>
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
