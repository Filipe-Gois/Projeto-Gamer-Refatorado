import IconComponent from "../../IconComponent";
import { LiNav, LinkNav, MidiasSociaisBox, NavbarStyle, UlNav } from "./style";

type NavBarProps = {
  exibeNavbar?: string;
};

const Navbar = ({ exibeNavbar = "false" }: NavBarProps) => {
  return (
    <NavbarStyle $exibenavbar={exibeNavbar}>
      <UlNav>
        <LiNav>
          <LinkNav to={"/"}>Início</LinkNav>
        </LiNav>

        <LiNav>
          <LinkNav to={"/"}>Jogadores</LinkNav>
        </LiNav>
        <LiNav>
          <LinkNav to={"/"}>Equipes</LinkNav>
        </LiNav>
        <LiNav>
          <LinkNav to={"/"}>Notícias</LinkNav>
        </LiNav>
        <LiNav>
          <LinkNav to={"/"}>
            <IconComponent iconType="phone" />
            <p>(11) 0900-1010</p>
          </LinkNav>
        </LiNav>
        <LiNav $isLast>
          <LinkNav to={"/"}>
            <IconComponent iconType="mail" />
            <p>contato@gamer.com.br</p>
          </LinkNav>
        </LiNav>
      </UlNav>

      <MidiasSociaisBox>
        <IconComponent iconType="facebook" />
        <IconComponent iconType="linkedin" />
        <IconComponent iconType="instagram" />
      </MidiasSociaisBox>
    </NavbarStyle>
  );
};

export default Navbar;
