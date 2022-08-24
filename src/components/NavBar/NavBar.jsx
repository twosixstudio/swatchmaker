import { NavBar as NavBarUi } from "../../ui";
import {
  createTextFileFromString,
  createThemeJsStringFromSwatch,
  formatSwatchesForCssVariables,
  formatSwatchesForThemeObject,
  virtualDownloadClick,
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

  const download = () => {
    const formatted = formatSwatchesForThemeObject(swatchLocation.swatches);
    const string = createThemeJsStringFromSwatch(formatted);
    const file = createTextFileFromString(string, "colors.js");
    virtualDownloadClick(file);
  };

  return (
    <NavBarUi
      logoBgColor={swatchLocation.swatches[0]?.pallete[50]}
      logoColor={swatchLocation.swatches[0]?.baseColor}
      handleButtonDownloadClick={download}
      handleButtonCopyCssClick={copyCssVariables}
    />
  );
};
