import "./index.css";
import { useState } from "react";
import { ControlPanel, NavBar, SwatchRow } from "./ui";
import { useSwatchLocation } from "./hooks/useSwatchLocation";
import { AnimatePresence, motion } from "framer-motion";
import {
  createTextFileFromString,
  createThemeJsStringFromSwatch,
  formatSwatchesForThemeObject,
  virtualDownloadClick,
} from "./utils/colorUtils";

function App() {
  const swatchLocation = useSwatchLocation();
  const [controlsIndex, setControlsIndex] = useState();

  const createSwatchArray = (swatchObj) =>
    Object.keys(swatchObj)?.map((key) => {
      return { label: key, value: swatchObj[key] };
    });

  const download = () => {
    const formatted = formatSwatchesForThemeObject(swatchLocation.swatches);
    const string = createThemeJsStringFromSwatch(formatted);
    const file = createTextFileFromString(string, "colors.js");
    virtualDownloadClick(file);
  };

  const copy = () => {
    const formatted = formatSwatchesForThemeObject(swatchLocation.swatches);
    const string = createThemeJsStringFromSwatch(formatted);
    var data = [
      new ClipboardItem({
        "text/plain": new Blob([string], { type: "text/plain" }),
      }),
    ];
    navigator.clipboard.write(data);
  };

  return (
    <>
      <NavBar
        logoBgColor={swatchLocation.swatches[0]?.pallete[50]}
        logoColor={swatchLocation.swatches[0]?.baseColor}
        handleButtonDownloadClick={download}
        handleButtonCopyClick={copy}
      />
      <div className="p-4 max-w-5xl mx-auto mt-10">
        <div className="flex flex-col gap-20">
          {swatchLocation.swatches?.map(
            ({ baseColor, steps, pallete, ...props }, i) => (
              <div key={i}>
                <SwatchRow swatch={createSwatchArray(pallete)} {...props} />
                <button
                  onClick={() => {
                    swatchLocation.removeSwatch(i);
                    setControlsIndex();
                  }}
                >
                  Remove
                </button>
                <button onClick={() => setControlsIndex(i + 1)}>edit</button>
                <input
                  placeholder="change color"
                  value={baseColor}
                  onChange={(e) =>
                    swatchLocation.editValue("baseColor", e.target.value, i)
                  }
                />
              </div>
            )
          )}
          <button
            onClick={() => {
              swatchLocation.addSwatch();
            }}
          >
            Add a color
          </button>
          <AnimatePresence>
            {controlsIndex && swatchLocation.swatchParams && (
              <motion.div
                style={{ position: "fixed", top: "2rem", left: 0, right: 0 }}
                initial={{ scale: 0.5, opacity: 0, y: 300 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0 },
                }}
                exit={{ scale: 0.5, opacity: 0, y: 300 }}
                key={controlsIndex}
              >
                <ControlPanel
                  {...swatchLocation.swatchParams[controlsIndex - 1]}
                  handleValueChange={(props) =>
                    swatchLocation.editValue(props, controlsIndex - 1)
                  }
                  handleDoneClick={() => setControlsIndex()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
