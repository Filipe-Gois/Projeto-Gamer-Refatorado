import { useState } from "react";
import Arrow from "../../Arrow";
import Logo from "../../Logo";
import MenuIconComponent from "../../MenuIconComponent";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import { HeaderBottomStyle } from "./style";

const HeaderBottom = () => {
  const [exibeNavbar, setExibeNavbar] = useState<boolean>(false);
  const [exibeSideBar, setExibeSideBar] = useState<boolean>(false);
  return (
    <HeaderBottomStyle>
      <MenuIconComponent
        exibeNavbar={exibeNavbar}
        setExibeNavbar={setExibeNavbar}
      />

      <Logo />
      <Navbar
        setExibeNavbar={setExibeNavbar}
        exibeNavbar={String(exibeNavbar)}
      />

      <SideBar
        setExibeSideBar={setExibeSideBar}
        exibeSideBar={String(exibeSideBar)}
      />
      <Arrow setExibeSideBar={setExibeSideBar} exibeSideBar={exibeSideBar} />
    </HeaderBottomStyle>
  );
};

export default HeaderBottom;
