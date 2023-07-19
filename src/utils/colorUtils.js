import { parseToHsl } from "polished";

export const createSwatch = ({
  baseColor,
  steps = 20,
  range = 90,
  offset = 0,
  sat = 0,
  ...props
}) => {
  const intSteps = parseInt(steps);
  const min = 50;
  const max = 1000;
  const is50 = max / intSteps === 50;
  let actualSteps = is50 ? intSteps + 1 : intSteps;

  let colors = { base: baseColor };

  try {
    for (let i = 0; i < actualSteps; i++) {
      let label;
      label = (max / intSteps) * i;
      if (label === 0) label = min;
      const hsl = parseToHsl(baseColor);
      const saturation = parseInt(hsl.saturation * 100 - sat);
      const hue = parseInt(hsl.hue);
      const pct = ((100 - (100 - range)) / 100) * (label / 10);
      const lightness = parseInt(100 - pct - offset);
      colors[parseInt(label)] = `hsl(${hue}, ${saturation}%, ${
        lightness < 0 ? 0 : lightness > 100 ? 100 : lightness
      }%)`;
    }
  } catch (error) {}
  return colors;
};

export const hslToHex = (h, s, l) => {
  console.log(h,s,l,'hsl')
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

export const virtualDownloadClick = (file) => {
  const link = document.createElement("a");
  const url = URL.createObjectURL(file);

  link.href = url;
  link.download = file.name;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const formatSwatchesForThemeObject = (swatches) => {
  let formatted = {};

  swatches.forEach((element) => {
    const formattedTitle = element.title.toLowerCase().replace(/\s/g, "");
    formatted[formattedTitle] = element.pallete;
  });

  return formatted;
};

export const createFigmaVariablesFromSwatch = (swatches) => {
  let obj = { fileName: "Colors", colors: {} };
  console.log(swatches);
  swatches.forEach((element) => {
    const palleteKeys = Object.keys(element.pallete);

    const formattedTitle = element.title.toLowerCase().replace(/\s/g, "");
    // formatted += `\n`;
    palleteKeys.forEach((e) => {
      const key = `${formattedTitle} ${e}`;
      const value = element.pallete[e];
      const hsl = parseToHsl(value);
      console.log(hsl);
      obj.colors[key] = {
        $type: "color",
        $value: hslToHex(hsl.hue, hsl.saturation * 100, hsl.lightness * 100),
      };
    });
  });
  return JSON.stringify(obj);
};

export const createThemeJsStringFromSwatch = (swatch) => {
  return `//${window.location.href}
          
  export const colors = ${JSON.stringify(swatch, null, 2)}`;
};

export const createTextFileFromString = (str, name) => {
  return new File([str], name, {
    type: "text/plain",
  });
};

export const formatSwatchesForCssVariables = (swatches) => {
  let formatted = "";
  swatches.forEach((element) => {
    const palleteKeys = Object.keys(element.pallete);
    const formattedTitle = element.title.toLowerCase().replace(/\s/g, "");
    formatted += `\n`;
    palleteKeys.forEach((e) => {
      const key = `--${formattedTitle}-${e}`;
      const value = element.pallete[e];
      formatted += `${key}:${value};\n`;
    });
  });
  return formatted;
};

export const createCssVariableStringFromSwatch = (swatch) => {
  return `/* ${window.location.href} */\n:root {${swatch}}`;
};
