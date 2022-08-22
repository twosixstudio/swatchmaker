import { ButtonDownload } from "../Buttons";
import { NavBarWrapper, NavBarLogo } from "./ui";

export const NavBar = ({
  logoColor,
  logoBgColor,
  handleButtonDownloadClick,
  handleButtonCopyClick
}) => (
  <NavBarWrapper>
    <NavBarLogo {...{ logoColor, logoBgColor }} />
    <ButtonDownload onClick={handleButtonDownloadClick} />
    <button onClick={handleButtonCopyClick}>Copy values</button>
  </NavBarWrapper>
);
