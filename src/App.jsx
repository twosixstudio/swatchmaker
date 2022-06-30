import "./index.css";
import { useState } from "react";
import { createSwatch } from "./utils/colorUtils";
import { SwatchRow } from "./ui";

function App() {
  const [count, setCount] = useState(0);
  const [desaturation, setDesaturation] = useState(0);
  const [steps, setSteps] = useState(10);
  const [range, setRange] = useState();
  const [baseColor, setColor] = useState("orange");
  const [baseColorTwo, setTwoColor] = useState("plum");

  const swatch = createSwatch({
    baseColor,
    desaturation,
    steps,
    range,
  });

  const createSwatchArray = (swatchObj) =>
    Object.keys(swatchObj)?.map((key) => {
      return { label: key, value: swatchObj[key] };
    });

  return (
    <div className="p-4 max-w-5xl mx-auto mt-10">
      <div className="flex flex-col gap-20">
        <SwatchRow title="Primary" swatch={createSwatchArray(swatch)} />
        <SwatchRow
          title="Secondary"
          swatch={createSwatchArray(
            createSwatch({
              baseColor: baseColorTwo,
              desaturation,
              steps,
              range,
            })
          )}
        />
      </div>
    </div>
  );
}

export default App;
