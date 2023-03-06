import { ButtonDownload } from "../Buttons";
import { NavBarWrapper, NavBarLogo } from "./ui";

export const NavBar = ({
  logoColor,
  logoBgColor,
  handleButtonCopyJsThemeClick,
  handleButtonCopyCssClick,
}) => (
  <NavBarWrapper>
    <NavBarLogo {...{ logoColor, logoBgColor }} />
    <nav className="flex flex-col gap-3">
      <ButtonDownload
        onClick={handleButtonCopyJsThemeClick}
        label="Download JS theme"
      />
      <ButtonDownload
        onClick={handleButtonCopyCssClick}
        label="Copy CSS variables"
      />
    </nav>
  </NavBarWrapper>
);
