import { Theme } from "../../../Styles/Theme";
import IconComponent from "../../IconComponent";
import LinkComponent from "../../LinkComponent";
import { LiSideBar, SideBarStyle, UlSideBar } from "./style";

type SideBarProps = {
  exibeSideBar?: string;
  setExibeSideBar(exibeSideBar: boolean): void;
};

const SideBar = ({ exibeSideBar = "false", setExibeSideBar }: SideBarProps) => {
  const iconColor = Theme.colors.primary;
  const strokeColor = Theme.colors.secondary;

  return (
    <SideBarStyle $exibeSideBar={exibeSideBar}>
      <UlSideBar>
        <LiSideBar>
          <LinkComponent onClick={() => setExibeSideBar(false)} to={"/"}>
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
          <LinkComponent onClick={() => setExibeSideBar(false)} to={"/"}>
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
          <LinkComponent onClick={() => setExibeSideBar(false)} to={"/"}>
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
