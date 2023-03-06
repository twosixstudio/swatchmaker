import {
  ControlPanelWrapper,
  ControlPanelInput,
  ControlPanelButtton,
} from "./ui";
import { HexColorPicker, HexColorInput } from "react-colorful";

export const ControlPanel = ({
  baseColor,
  title,
  steps,
  sat,
  range,
  offset,
  handleDoneClick,
  handleValueChange,
}) => {
  return (
    <ControlPanelWrapper>
      <div className="grid grid-cols-2 gap-4">
        <ControlPanelInput
          label="Name"
          value={title}
          placeholder="Give this swatch a name"
          onChange={(e) => handleValueChange({ title: e.target.value })}
        />
        <ControlPanelInput
          label="Number of colors"
          value={steps}
          type="number"
          onChange={(e) => handleValueChange({ steps: e.target.value })}
        />
        <ControlPanelInput
          label="Desaturation"
          value={sat}
          type="number"
          onChange={(e) => handleValueChange({ sat: e.target.value })}
        />
        <ControlPanelInput
          label="Range"
          value={range}
          type="number"
          onChange={(e) => handleValueChange({ range: e.target.value })}
        />
        <ControlPanelInput
          label="Offset"
          value={offset}
          type="number"
          onChange={(e) => handleValueChange({ offset: e.target.value })}
        />
        <label>
          Hex base color
          <HexColorInput
            className="border border-slate-300 h-10 rounded-md px-3 w-full"
            color={baseColor}
            onChange={(e) => handleValueChange({ baseColor: e })}
          />
        </label>
      </div>
      <HexColorPicker
        style={{ width: "100%" }}
        color={baseColor}
        onChange={(e) => handleValueChange({ baseColor: e })}
      />
      <ControlPanelButtton onClick={handleDoneClick}>done</ControlPanelButtton>
    </ControlPanelWrapper>
  );
};
