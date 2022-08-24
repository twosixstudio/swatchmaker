import { readableColor } from "polished";
import { SwatchTileHover, SwatchTileWrapper } from "./ui";

export const SwatchTile = ({ label, value, onClick }) => {
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
      onClick={() => onClick(value)}
    >
      <SwatchTileHover>{label}</SwatchTileHover>
    </SwatchTileWrapper>
  );
};
