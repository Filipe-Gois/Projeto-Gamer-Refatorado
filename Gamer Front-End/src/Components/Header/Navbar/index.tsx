import { Theme } from "../../../Styles/Theme";
import IconComponent from "../../IconComponent";
import LinkComponent from "../../LinkComponent";
import MidiasSociaisComponent from "../MidiasSociais";
import { LiNav, LiNavContato, NavbarStyle, UlNav } from "./style";

type NavBarProps = {
  exibeNavbar?: string;
  setExibeNavbar(exibeNavbar: boolean): void;
};

const Navbar = ({ exibeNavbar = "false", setExibeNavbar }: NavBarProps) => {
  return (
    <NavbarStyle $exibenavbar={exibeNavbar}>
      <UlNav>
        <LiNav>
          <LinkComponent onClick={() => setExibeNavbar(false)} to={"/"}>
            Início
          </LinkComponent>
        </LiNav>

        <LiNav>
          <LinkComponent onClick={() => setExibeNavbar(false)} to={"/"}>
            Jogadores
          </LinkComponent>
        </LiNav>
        <LiNav>
          <LinkComponent onClick={() => setExibeNavbar(false)} to={"/"}>
            Equipes
          </LinkComponent>
        </LiNav>
        <LiNav>
          <LinkComponent onClick={() => setExibeNavbar(false)} to={"/"}>
            Notícias
          </LinkComponent>
        </LiNav>
        <LiNavContato>
          <LinkComponent onClick={() => setExibeNavbar(false)} to={"/"}>
            <IconComponent strokePath={Theme.colors.primary} iconType="phone" />
            <p>(11) 0900-1010</p>
          </LinkComponent>
        </LiNavContato>
        <LiNavContato $isLast>
          <LinkComponent to={"/"}>
            <IconComponent iconType="mail" />
            <p>contato@gamer.com.br</p>
          </LinkComponent>
        </LiNavContato>
      </UlNav>

      <MidiasSociaisComponent display="none" />
    </NavbarStyle>
  );
};

export default Navbar;
