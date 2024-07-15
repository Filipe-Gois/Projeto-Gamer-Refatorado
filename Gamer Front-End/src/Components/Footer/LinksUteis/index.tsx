import { Theme } from "../../../Styles/Theme";
import Line from "../../Line";
import Paragraph from "../../Paragraph";
import Title from "../../Title";
import {
  FooterLinksUteisStyle,
  LinksUteisContent,
  LinkUtilItem,
} from "./style";

const FooterLinksUteis = () => {
  const secondaryColor = Theme.colors.secondary;

  const navegarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navegarANoticias = () => {
    const noticiasSection = document.querySelector("#noticias-section");
    if (noticiasSection) {
      noticiasSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <FooterLinksUteisStyle>
      <Title fontSize="30px" text="Links Úteis" />
      <Line
        margin="15px 0 0 0"
        height="3px"
        width="33.5%"
        backgroundColor={secondaryColor}
      />

      <LinksUteisContent>
        <LinkUtilItem onClick={navegarAoTopo} to={"/"}>
          <Line height="2px" width="15px" backgroundColor={secondaryColor} />
          <Paragraph fontSize="16px" text="Início" />
        </LinkUtilItem>
        <LinkUtilItem to={"/Jogadores"}>
          <Line height="2px" width="15px" backgroundColor={secondaryColor} />
          <Paragraph fontSize="16px" text="Jogadores" />
        </LinkUtilItem>
        <LinkUtilItem onClick={navegarANoticias} to={"/"}>
          <Line height="2px" width="15px" backgroundColor={secondaryColor} />
          <Paragraph fontSize="16px" text="Notícias" />
        </LinkUtilItem>
        <LinkUtilItem to={"/Login"}>
          <Line height="2px" width="15px" backgroundColor={secondaryColor} />
          <Paragraph fontSize="16px" text="Login" />
        </LinkUtilItem>
        <LinkUtilItem to={"/Equipes"}>
          <Line height="2px" width="15px" backgroundColor={secondaryColor} />
          <Paragraph fontSize="16px" text="Equipes" />
        </LinkUtilItem>
      </LinksUteisContent>
    </FooterLinksUteisStyle>
  );
};

export default FooterLinksUteis;
