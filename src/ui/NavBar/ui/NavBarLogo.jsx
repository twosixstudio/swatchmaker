import { Logo } from "../../Logo/Logo";

export const NavBarLogo = ({ logoColor, logoBgColor }) => (
  <Logo color={logoColor} bgColor={logoBgColor} className="w-[100px] sm:w-[150px]" />
);
