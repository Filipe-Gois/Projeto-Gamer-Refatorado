import { Theme } from "../../../Styles/Theme";
import IconComponent from "../../IconComponent";
import LinkComponent from "../../LinkComponent";
import { LiSideBar, SideBarStyle, UlSideBar } from "./style";

type SideBarProps = {
  exibeSideBar?: string;
  setExibeSideBar(exibeSideBar: boolean): void;
  sideBarIconRef: React.RefObject<HTMLInputElement>;
};

const SideBar = ({
  exibeSideBar = "false",
  setExibeSideBar,
  sideBarIconRef,
}: SideBarProps) => {
  const iconColor = Theme.colors.primary;
  const strokeColor = Theme.colors.secondary;

  const fecharSideBar = () => {
    if (sideBarIconRef.current) {
      sideBarIconRef.current.checked = false;
    }

    setExibeSideBar(false);
  };

  return (
    <SideBarStyle $exibeSideBar={exibeSideBar}>
      <UlSideBar>
        <LiSideBar>
          <LinkComponent onClick={fecharSideBar} to={"/Login"}>
            <IconComponent
              strokeSvg={strokeColor}
              fillSvg={iconColor}
              strokePath={strokeColor}
              fillPath={iconColor}
              iconType="user"
            />
          </LinkComponent>
        </LiSideBar>
        <LiSideBar>
          <LinkComponent onClick={fecharSideBar} to={"/"}>
            <IconComponent
              strokeSvg={strokeColor}
              fillSvg={iconColor}
              strokePath={strokeColor}
              fillPath={iconColor}
              iconType="cart"
            />
          </LinkComponent>
        </LiSideBar>
        <LiSideBar>
          <LinkComponent onClick={fecharSideBar} to={"/"}>
            <IconComponent
              strokeSvg={strokeColor}
              fillSvg={iconColor}
              strokePath={strokeColor}
              fillPath={iconColor}
              iconType="search"
            />
          </LinkComponent>
        </LiSideBar>
      </UlSideBar>
    </SideBarStyle>
  );
};

export default SideBar;
