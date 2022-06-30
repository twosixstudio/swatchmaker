import { readableColor } from "polished";
import { SwatchTileWrapper } from "./ui";

export const SwatchTile = ({ label, value }) => {
  const textColor = readableColor(value);
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
