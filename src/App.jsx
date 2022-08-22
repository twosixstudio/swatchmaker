import "./index.css";
import { useState } from "react";
import { ControlPanel, Logo, SwatchRow } from "./ui";
import { useSwatchLocation } from "./hooks/useSwatchLocation";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const swatchLocation = useSwatchLocation();
  const [controlsIndex, setControlsIndex] = useState();

  const createSwatchArray = (swatchObj) =>
    Object.keys(swatchObj)?.map((key) => {
      return { label: key, value: swatchObj[key] };
    });

  function download() {
    let formatted = {};

    swatchLocation.swatches.forEach((element) => {
      const formattedTitle = element.title.toLowerCase().replace(/\s/g, "");
      formatted[formattedTitle] = element.pallete;
    });

    const file = new File(
      [
        `
//${window.location.href}

export const colors = ${JSON.stringify(formatted, null, 2)}`,
      ],
      "colors.js",
      {
        type: "text/plain",
      }
    );

    const link = document.createElement("a");
    const url = URL.createObjectURL(file);

    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="p-4 max-w-5xl mx-auto mt-10">
      <div className="flex flex-col gap-20">
        <Logo width='150px' bgColor={swatchLocation.swatches[0]?.pallete[50]} color={swatchLocation.swatches[0]?.baseColor} />
        <button onClick={() => download()}>file</button>
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
              animate={{ scale: 1, opacity: 1, y: 0, transition: { delay: 0 } }}
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
  );
}

export default App;
