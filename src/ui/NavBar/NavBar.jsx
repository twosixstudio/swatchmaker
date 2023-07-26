import { ButtonDownload } from "../Buttons";
import { NavBarWrapper, NavBarLogo } from "./ui";

export const NavBar = ({
  logoColor,
  logoBgColor,
  handleButtonCopyJsThemeClick,
  handleButtonCopyCssClick,
  handleFigmaVariablesButtonClick,
}) => (
  <NavBarWrapper>
    <NavBarLogo {...{ logoColor, logoBgColor }} />
    <nav className="flex flex-col gap-3">
      <ButtonDownload
        onClick={handleButtonCopyJsThemeClick}
        label="Copy JS theme"
      />
      <ButtonDownload
        onClick={handleButtonCopyCssClick}
        label="Copy CSS variables"
      />
      <ButtonDownload
        onClick={handleFigmaVariablesButtonClick}
        label="Download Figma vars"
      />
    </nav>
  </NavBarWrapper>
);
