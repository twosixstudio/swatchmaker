import { ButtonDownload } from "../Buttons";
import { NavBarWrapper, NavBarLogo } from "./ui";

export const NavBar = ({
  logoColor,
  logoBgColor,
  handleButtonDownloadClick,
  handleButtonCopyCssClick,
}) => (
  <NavBarWrapper>
    <NavBarLogo {...{ logoColor, logoBgColor }} />
    <nav className="flex flex-col gap-3">
      <ButtonDownload
        onClick={handleButtonDownloadClick}
        label="Download JS theme"
      />
      <ButtonDownload
        onClick={handleButtonCopyCssClick}
        label="Copy CSS variables"
      />
    </nav>
  </NavBarWrapper>
);
