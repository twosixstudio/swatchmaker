import { parseToHsl } from "polished";

export const createSwatch = ({
  baseColor,
  steps = 10,
  range = 90,
  offset = 0,
  desaturation = 0,
}) => {
  const min = 50;
  const max = 1000;
  const is50 = max / steps === 50;
  let actualSteps = is50 ? steps + 1 : steps;

  let colors = { base: baseColor };
  for (let i = 0; i < actualSteps; i++) {
    let label;
    label = (max / steps) * i;
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
  return colors;
};
