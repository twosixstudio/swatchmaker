import { parseToHsl } from "polished";

export const createSwatch = ({
  baseColor,
  steps = 20,
  range = 90,
  offset = 0,
  desaturation = 0,
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
      const saturation = parseInt(hsl.saturation * 100 - desaturation);
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