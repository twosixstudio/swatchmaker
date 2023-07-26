import "./index.css";
import { Footer, NavBar, SwatchMaker } from "./components";
import { useSwatchLocation } from "./hooks";

function App() {
  const swatchLocation = useSwatchLocation();
  return (
    <div className="min-h-[100dvh] flex flex-col w-full">
      <div className="w-full grow">
        <NavBar {...{ swatchLocation }} />
        <SwatchMaker {...{ swatchLocation }} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
