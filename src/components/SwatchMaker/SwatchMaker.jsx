import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ControlPanel, SwatchRow, ButtonAdd } from "../../ui";
import { SwatchMakerWrapper } from "./ui";
import { motion } from "framer-motion";

export const SwatchMaker = ({ swatchLocation }) => {
  const [controlsIndex, setControlsIndex] = useState();
  
  const copy = (v) => {
    const hsl = parseToHsl(v);
    const hex = hslToHex(hsl.hue, hsl.saturation * 100, hsl.lightness * 100);
    var data = [
      new ClipboardItem({
        "text/plain": new Blob([hex], {
          type: "text/plain",
        }),
      }),
    ];
    navigator.clipboard.write(data);
  };

  const createSwatchArray = (swatchObj) =>
    Object.keys(swatchObj)?.map((key) => {
      return { label: key, value: swatchObj[key] };
    });

  return (
    <SwatchMakerWrapper>
      {swatchLocation.swatches?.map(
        ({ baseColor, steps, pallete, ...props }, i) => (
          <SwatchRow
            key={i}
            swatch={createSwatchArray(pallete)}
            handleSwatchItemClick={copy}
            handleButtonDeleteClick={() => {
              swatchLocation.removeSwatch(i);
              setControlsIndex();
            }}
            handleButtonEditClick={() => setControlsIndex(i + 1)}
            {...props}
          />
        )
      )}
      <ButtonAdd onClick={swatchLocation.addSwatch} />

      <AnimatePresence>
        {controlsIndex && swatchLocation.swatchParams && (
          <motion.div
            style={{ position: "fixed", top: 20, left: 0, right: 0 }}
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
    </SwatchMakerWrapper>
  );
};
