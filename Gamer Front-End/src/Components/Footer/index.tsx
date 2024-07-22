import { Container, GridLayout } from "../Container/Container";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import { FooterRow1, FooterRow2, FooterStyle } from "./style";
import FooterLinksUteis from "./LinksUteis";
import FooterContatos from "./FooterContatos";
import Paragraph from "../Paragraph";

const Footer = () => {
  return (
    <FooterStyle>
      <GridLayout>
        <Container $flexD="row" $padding="0 0 40px 0">
          <FooterRow1>
            <FooterTop />
            <FooterLinksUteis />
          </FooterRow1>
          <FooterRow2>
            <FooterContatos />
            <FooterBottom />
          </FooterRow2>
          <Paragraph text={`©Copyright2022-GamerJogosDigitais`} />
        </Container>
      </GridLayout>
    </FooterStyle>
  );
};

export default Footer;
