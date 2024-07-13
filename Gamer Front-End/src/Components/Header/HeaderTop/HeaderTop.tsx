import { Theme } from "../../../Styles/Theme";
import IconComponent from "../../IconComponent";
import LinkComponent from "../../LinkComponent";
import MidiasSociaisComponent from "../MidiasSociais";
import { LiNav } from "../Navbar/style";
import { ContainerContato, HeaderTopStyle } from "./style";

const HeaderTop = () => {
  return (
    <HeaderTopStyle>
      <ContainerContato>
        <LiNav>
          <LinkComponent to={"/"}>
            <IconComponent strokePath={Theme.colors.primary} iconType="phone" />
            <p>(11) 0900-1010</p>
          </LinkComponent>
        </LiNav>
        <LiNav $isLast>
          <LinkComponent to={"/"}>
            <IconComponent iconType="mail" />
            <p>contato@gamer.com.br</p>
          </LinkComponent>
        </LiNav>
      </ContainerContato>

      <MidiasSociaisComponent gap="25px" />
    </HeaderTopStyle>
  );
};

export default HeaderTop;
