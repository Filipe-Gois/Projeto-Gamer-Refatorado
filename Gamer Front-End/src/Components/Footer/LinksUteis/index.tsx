import { Theme } from "../../../Styles/Theme";
import Line from "../../Line";
import Paragraph from "../../Paragraph";
import Title from "../../Title";
import {
  FooterLinksUteisStyle,
  LiLinksUteis,
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
        <LiLinksUteis>
          <LinkUtilItem onClick={navegarAoTopo} to={"/"}>
            <Line height="2px" width="15px" backgroundColor={secondaryColor} />
            <Paragraph
              fontFamily={Theme.fonts.titilliumWeb}
              fontWeight="800"
              fontSize="16px"
              text="Início"
            />
          </LinkUtilItem>
        </LiLinksUteis>

        <LiLinksUteis>
          <LinkUtilItem to={"/Jogadores"}>
            <Line height="2px" width="15px" backgroundColor={secondaryColor} />
            <Paragraph
              fontFamily={Theme.fonts.titilliumWeb}
              fontWeight="800"
              fontSize="16px"
              text="Jogadores"
            />
          </LinkUtilItem>
        </LiLinksUteis>
        <LiLinksUteis>
          <LinkUtilItem onClick={navegarANoticias} to={"/"}>
            <Line height="2px" width="15px" backgroundColor={secondaryColor} />
            <Paragraph
              fontFamily={Theme.fonts.titilliumWeb}
              fontWeight="800"
              fontSize="16px"
              text="Notícias"
            />
          </LinkUtilItem>
        </LiLinksUteis>
        <LiLinksUteis>
          <LinkUtilItem to={"/Login"}>
            <Line height="2px" width="15px" backgroundColor={secondaryColor} />
            <Paragraph
              fontFamily={Theme.fonts.titilliumWeb}
              fontWeight="800"
              fontSize="16px"
              text="Login"
            />
          </LinkUtilItem>
        </LiLinksUteis>
        <LiLinksUteis>
          <LinkUtilItem to={"/Equipes"}>
            <Line height="2px" width="15px" backgroundColor={secondaryColor} />
            <Paragraph
              fontFamily={Theme.fonts.titilliumWeb}
              fontWeight="800"
              fontSize="16px"
              text="Equipes"
            />
          </LinkUtilItem>
        </LiLinksUteis>
      </LinksUteisContent>
    </FooterLinksUteisStyle>
  );
};

export default FooterLinksUteis;
