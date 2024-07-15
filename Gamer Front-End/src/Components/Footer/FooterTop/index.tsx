import {
  FooterLogoImg,
  FooterTopStyle,
  IconBoxYellow,
  SociaisBox,
} from "./style";
import logoFooterMobile from "../../../assets/images/logotipo-gamer--footer.png";
import Paragraph from "../../Paragraph";
import IconComponent from "../../IconComponent";
import { Theme } from "../../../Styles/Theme";

const FooterTop = () => {
  const primaryColor = Theme.colors.primary;

  const linkedinLink = `https://www.linkedin.com/in/filipe-góis-841b58206/`;
  const instagramLink = `https://www.instagram.com/felpz.11/`;

  return (
    <FooterTopStyle>
      <FooterLogoImg src={logoFooterMobile} />

      <Paragraph text="Nosso sucesso na criação de soluções de negócios se deve em grande parte à nossa equipe talentosa e altamente comprometida." />

      <SociaisBox>
        <IconBoxYellow href={linkedinLink}>
          <IconComponent
            fillPath={primaryColor}
            strokePath={primaryColor}
            iconType="facebook"
          />
        </IconBoxYellow>
        <IconBoxYellow href={linkedinLink}>
          <IconComponent
            fillPath={primaryColor}
            strokePath={primaryColor}
            iconType="linkedin"
          />
        </IconBoxYellow>
        <IconBoxYellow href={instagramLink}>
          <IconComponent
            fillPath={primaryColor}
            strokePath={primaryColor}
            iconType="instagram"
          />
        </IconBoxYellow>
      </SociaisBox>
    </FooterTopStyle>
  );
};

export default FooterTop;
