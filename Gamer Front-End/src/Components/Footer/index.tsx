import { GridLayout } from "../Container/Container";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import {
  ContainerFooter,
  CopyRyghtText,
  FooterGradient,
  FooterRow1,
  FooterRow2,
  FooterStyle,
} from "./style";
import FooterLinksUteis from "./LinksUteis";
import FooterContatos from "./FooterContatos";

const Footer = () => {
  return (
    <FooterStyle>
      <FooterGradient />
      <GridLayout>
        <ContainerFooter>
          <FooterRow1>
            <FooterTop />
            <FooterLinksUteis />
          </FooterRow1>
          <FooterRow2>
            <FooterContatos />
            <FooterBottom />
          </FooterRow2>
          <CopyRyghtText>©Copyright2022-GamerJogosDigitais</CopyRyghtText>
        </ContainerFooter>
      </GridLayout>
    </FooterStyle>
  );
};

export default Footer;
