import IconComponent from "../../IconComponent";
import { LinkNav } from "../Navbar/style";
import { LiSideBar, SideBarStyle, UlSideBar } from "./style";

type SideBarProps = {
  exibeSideBar?: string;
};

const SideBar = ({ exibeSideBar = "false" }: SideBarProps) => {
  return (
    <SideBarStyle $exibeSideBar={exibeSideBar}>
      <UlSideBar>
        <LiSideBar>
          <LinkNav to={"/"}>
            <IconComponent iconType="user" />
          </LinkNav>
        </LiSideBar>
        <LiSideBar>
          <LinkNav to={"/"}>
            <IconComponent iconType="cart" />
          </LinkNav>
        </LiSideBar>
        <LiSideBar>
          <LinkNav to={"/"}>
            <IconComponent iconType="search" />
          </LinkNav>
        </LiSideBar>
      </UlSideBar>
    </SideBarStyle>
  );
};

export default SideBar;
