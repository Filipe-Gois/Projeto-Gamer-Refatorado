import { NavbarStyle } from "./style";

type NavBarProps = {
  exibeNavbar?: string;
};

const Navbar = ({ exibeNavbar = "false" }: NavBarProps) => {
  return <NavbarStyle $exibenavbar={exibeNavbar}></NavbarStyle>;
};

export default Navbar;
