import { Theme } from "../../../Styles/Theme";
import Line from "../../Line";
import Paragraph from "../../Paragraph";
import Title from "../../Title";
import {
  FooterContatosContent,
  FooterContatosStyle,
  ParagraphContent,
} from "./style";

const FooterContatos = () => {
  const secondaryColor = Theme.colors.secondary;
  return (
    <FooterContatosStyle>
      <Title fontSize="30px" text="Contatos" />
      <Line
        margin="15px 0 0 0"
        height="3px"
        width="33.5%"
        backgroundColor={secondaryColor}
      />

      <FooterContatosContent>
        <ParagraphContent>
          <Paragraph
            fontFamily={Theme.fonts.titilliumWeb}
            fontWeight="800"
            fontSize="16px"
            text="Localização:"
            textColor={secondaryColor}
          />
          <Paragraph
            fontFamily={Theme.fonts.titilliumWeb}
            fontWeight="800"
            fontSize="16px"
            text="Rua Niterói, 180 - São Caetano do Sul- SP"
          />
        </ParagraphContent>

        <ParagraphContent>
          <Paragraph
            fontFamily={Theme.fonts.titilliumWeb}
            fontWeight="800"
            fontSize="16px"
            text="Junte-se a nós:"
            textColor={secondaryColor}
          />
          <Paragraph
            fontFamily={Theme.fonts.titilliumWeb}
            fontWeight="800"
            fontSize="16px"
            text="contato@gamer.com.br "
          />
        </ParagraphContent>
        <ParagraphContent>
          <Paragraph
            fontFamily={Theme.fonts.titilliumWeb}
            fontWeight="800"
            fontSize="16px"
            text="Junte-se a nós:"
            textColor={secondaryColor}
          />
          <Paragraph
            fontFamily={Theme.fonts.titilliumWeb}
            fontWeight="800"
            fontSize="16px"
            text="(11) 0900-1010"
          />
        </ParagraphContent>
      </FooterContatosContent>
    </FooterContatosStyle>
  );
};

export default FooterContatos;
