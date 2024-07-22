import { Theme } from "../../../Styles/Theme";
import IconComponent from "../../IconComponent";
import LinkComponent from "../../LinkComponent";
import MidiasSociaisComponent from "../MidiasSociais";
import { LiNav, LiNavContato, NavbarStyle, UlNav } from "./style";

type NavBarProps = {
  exibeNavbar?: string;
  setExibeNavbar(exibeNavbar: boolean): void;
  navIconRef: React.RefObject<HTMLInputElement>;
};

const Navbar = ({
  exibeNavbar = "false",
  setExibeNavbar,
  navIconRef,
}: NavBarProps) => {
  const fecharNavBar = () => {
    if (navIconRef.current) {
      navIconRef.current.checked = false;
    }
    setExibeNavbar(!exibeNavbar);
  };
  const navegarANoticias = () => {
    fecharNavBar();
    const noticiasSection = document.querySelector("#noticias-section");
    if (noticiasSection) {
      noticiasSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <NavbarStyle $exibenavbar={exibeNavbar}>
      <UlNav>
        <LiNav>
          <LinkComponent onClick={fecharNavBar} to={"/"}>
            Início
          </LinkComponent>
        </LiNav>

        <LiNav>
          <LinkComponent onClick={fecharNavBar} to={"/"}>
            Jogadores
          </LinkComponent>
        </LiNav>
        <LiNav>
          <LinkComponent onClick={fecharNavBar} to={"/"}>
            Equipes
          </LinkComponent>
        </LiNav>
        <LiNav>
          <LinkComponent onClick={navegarANoticias} to={"/"}>
            Notícias
          </LinkComponent>
        </LiNav>
        <LiNavContato>
          <LinkComponent onClick={fecharNavBar} to={"/"}>
            <IconComponent strokePath={Theme.colors.primary} iconType="phone" />
            <p>(11) 0900-1010</p>
          </LinkComponent>
        </LiNavContato>
        <LiNavContato $isLast>
          <LinkComponent onClick={fecharNavBar} to={"/"}>
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
