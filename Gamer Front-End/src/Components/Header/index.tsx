import { useState } from "react";
import Arrow from "../Arrow";
import Logo from "../Logo";
import MenuIconComponent from "../MenuIconComponent";
import Navbar from "./Navbar";
import { HeaderStyle } from "./style";
import SideBar from "./SideBar";

const Header = () => {
  const [exibeNavbar, setExibeNavbar] = useState<boolean>(false);
  const [exibeSideBar, setExibeSideBar] = useState<boolean>(false);

  return (
    <HeaderStyle>
      <MenuIconComponent
        exibeNavbar={exibeNavbar}
        setExibeNavbar={setExibeNavbar}
      />
      <Navbar exibeNavbar={String(exibeNavbar)} />

      <Logo />

      <SideBar exibeSideBar={String(exibeSideBar)} />
      <Arrow setExibeSideBar={setExibeSideBar} exibeSideBar={exibeSideBar} />
    </HeaderStyle>
  );
};

export default Header;
