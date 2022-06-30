import {
  ControlPanelWrapper,
  ControlPanelWrapperInput,
  ControlPanelButtton,
} from "./ui";
import { HexColorPicker, HexColorInput } from "react-colorful";

export const ControlPanel = ({
  baseColor,
  title,
  steps,
  handleDoneClick,
  handleValueChange,
}) => {
  return (
    <ControlPanelWrapper>
      <div className="flex gap-5">
        <div className="flex flex-col gap-4 flex-grow bg-red-50">
          <ControlPanelWrapperInput
            value={title}
            placeholder="Give this swatch a name"
            onChange={(e) => handleValueChange({ title: e.target.value })}
          />
          <ControlPanelWrapperInput
            value={steps}
            type="number"
            onChange={(e) => handleValueChange({ steps: e.target.value })}
          />
          <HexColorInput
            className="border border-slate-300 h-10 rounded-md px-3"
            color={baseColor}
            onChange={(e) => handleValueChange({ baseColor: e })}
          />
        </div>
          <HexColorPicker
            color={baseColor}
            onChange={(e) => handleValueChange({ baseColor: e })}
          />
      </div>
      <ControlPanelButtton onClick={handleDoneClick}>done</ControlPanelButtton>
    </ControlPanelWrapper>
  );
};
