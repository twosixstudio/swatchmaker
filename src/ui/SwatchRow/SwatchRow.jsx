import {
  SwatchRowWrapper,
  SwatchRowTitle,
  SwatchRowTilesWrapper,
  SwatchRowControlsRow,
  SwatchRowButtonBar
} from "./ui";
import { SwatchTile } from "../SwatchTile/SwatchTile";
import { ButtonDelete, ButtonEdit } from "../Buttons";

export const SwatchRow = ({
  title,
  swatch = [],
  handleSwatchItemClick,
  handleButtonDeleteClick,
  handleButtonEditClick,
}) => (
  <SwatchRowWrapper>
    <SwatchRowControlsRow>
      <SwatchRowTitle {...{ title }} />
      <SwatchRowButtonBar>
        <ButtonEdit onClick={handleButtonEditClick} />
        <ButtonDelete onClick={handleButtonDeleteClick} />
      </SwatchRowButtonBar>
    </SwatchRowControlsRow>
    <SwatchRowTilesWrapper>
      {swatch.map((item, i) => (
        <SwatchTile key={i} {...item} onClick={handleSwatchItemClick} />
      ))}
    </SwatchRowTilesWrapper>
  </SwatchRowWrapper>
);
