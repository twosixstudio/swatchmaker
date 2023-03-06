import { NavBar as NavBarUi } from "../../ui";
import {
  createThemeJsStringFromSwatch,
  formatSwatchesForCssVariables,
  formatSwatchesForThemeObject,
} from "../../utils/";

export const NavBar = ({ swatchLocation }) => {
  const copyCssVariables = () => {
    const formatted = formatSwatchesForCssVariables(swatchLocation.swatches);
    var data = [
      new ClipboardItem({
        "text/plain": new Blob([formatted], {
          type: "text/plain",
        }),
      }),
    ];
    navigator.clipboard.write(data);
  };

  const copyThemeJs = () => {
    const formatted = formatSwatchesForThemeObject(swatchLocation.swatches);
    const string = createThemeJsStringFromSwatch(formatted);
    var data = [
      new ClipboardItem({
        "text/plain": new Blob([string], {
          type: "text/plain",
        }),
      }),
    ];
    navigator.clipboard.write(data);
  };

  return (
    <NavBarUi
      logoBgColor={swatchLocation.swatches[0]?.pallete[50]}
      logoColor={swatchLocation.swatches[0]?.baseColor}
      handleButtonCopyJsThemeClick={copyThemeJs}
      handleButtonCopyCssClick={copyCssVariables}
    />
  );
};
