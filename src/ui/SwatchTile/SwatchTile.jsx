import { readableColor } from "polished";
import { SwatchTileWrapper } from "./ui";

export const SwatchTile = ({ label, value }) => {
  let textColor = "black";
  try {
    textColor = readableColor(value);
  } catch (error) {}
  return (
    <SwatchTileWrapper
      style={{
        backgroundColor: value,
        color: textColor,
      }}
    >
      {label}
    </SwatchTileWrapper>
  );
};
