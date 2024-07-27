import { useLocation, useNavigate } from "react-router-dom";
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
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const fecharNavBar = () => {
    if (navIconRef.current) {
      navIconRef.current.checked = false;
    }
    setExibeNavbar(!exibeNavbar);
  };

  const irAoTopo = () => {
    fecharNavBar();

    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const navegarANoticias = () => {
    fecharNavBar();
    navigate("/");
    const noticiasSection = document.querySelector("#noticias-section");
    if (noticiasSection && pathname === "/") {
      noticiasSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <NavbarStyle $exibenavbar={exibeNavbar}>
      <UlNav>
        <LiNav $isNavList>
          <LinkComponent onClick={irAoTopo} to={"/"}>
            Início
          </LinkComponent>
        </LiNav>

        <LiNav $isNavList>
          <LinkComponent onClick={fecharNavBar} to={"/"}>
            Jogadores
          </LinkComponent>
        </LiNav>
        <LiNav $isNavList>
          <LinkComponent onClick={fecharNavBar} to={"/"}>
            Equipes
          </LinkComponent>
        </LiNav>
        <LiNav $isNavList>
          <LinkComponent onClick={navegarANoticias} to={""}>
            Notícias
          </LinkComponent>
        </LiNav>
        <LiNavContato>
          <LinkComponent to={"/"} onClick={fecharNavBar}>
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
