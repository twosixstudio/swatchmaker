import { SwatchRowWrapper, SwatchRowTitle, SwatchRowTilesWrapper } from "./ui";
import { SwatchTile } from "../SwatchTile/SwatchTile";

export const SwatchRow = ({ title, swatch = [] }) => (
  <SwatchRowWrapper>
    <SwatchRowTitle {...{ title }} />
    <SwatchRowTilesWrapper>
      {swatch.map((item, i) => (
        <SwatchTile key={i} {...item} />
      ))}
    </SwatchRowTilesWrapper>
  </SwatchRowWrapper>
);
