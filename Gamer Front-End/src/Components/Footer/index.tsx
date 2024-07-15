import { Container, GridLayout } from "../Container/Container";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import { FooterStyle } from "./style";
import FooterLinksUteis from "./LinksUteis";
import FooterContatos from "./FooterContatos";
import Paragraph from "../Paragraph";

const Footer = () => {
  return (
    <FooterStyle>
      <GridLayout>
        <Container $padding="0 0 40px 0">
          <FooterTop />
          <FooterLinksUteis />
          <FooterContatos />
          <FooterBottom />
          <Paragraph text={`©Copyright2022-GamerJogosDigitais`} />
        </Container>
      </GridLayout>
    </FooterStyle>
  );
};

export default Footer;
