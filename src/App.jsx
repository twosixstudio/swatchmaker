import "./index.css";
import { NavBar, SwatchMaker } from "./components";
import { useSwatchLocation } from "./hooks";

function App() {
  const swatchLocation = useSwatchLocation();
  return (
    <>
      <NavBar {...{ swatchLocation }} />
      <SwatchMaker {...{ swatchLocation }} />
    </>
  );
}

export default App;
