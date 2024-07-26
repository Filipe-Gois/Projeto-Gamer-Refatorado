import { useRef, useState } from "react";
import Arrow from "../../Arrow";
import Logo from "../../Logo";
import MenuIconComponent from "../../MenuIconComponent";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import { HeaderBottomStyle } from "./style";

const HeaderBottom = () => {
  const [exibeNavbar, setExibeNavbar] = useState<boolean>(false);
  const [exibeSideBar, setExibeSideBar] = useState<boolean>(false);
  const navIconRef = useRef<HTMLInputElement>(null);
  const sideBarIconRef = useRef<HTMLInputElement>(null);

  const irAoTopo = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <HeaderBottomStyle>
      <MenuIconComponent
        navRef={navIconRef}
        exibeNavbar={exibeNavbar}
        setExibeNavbar={setExibeNavbar}
      />

      <Logo onClick={irAoTopo} />
      <Navbar
        navIconRef={navIconRef}
        setExibeNavbar={setExibeNavbar}
        exibeNavbar={String(exibeNavbar)}
      />

      <SideBar
        sideBarIconRef={sideBarIconRef}
        setExibeSideBar={setExibeSideBar}
        exibeSideBar={String(exibeSideBar)}
      />
      <Arrow
        sideBarIconRef={sideBarIconRef}
        setExibeSideBar={setExibeSideBar}
        exibeSideBar={exibeSideBar}
      />
    </HeaderBottomStyle>
  );
};

export default HeaderBottom;
