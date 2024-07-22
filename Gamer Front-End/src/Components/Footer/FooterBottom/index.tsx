import { Theme } from "../../../Styles/Theme";
import ButtonComponent from "../../Button";
import FormComponent from "../../Form";
import Line from "../../Line";
import Title from "../../Title";
import { FooterBottomStyle } from "./style";
import Input from "../../Input";

const FooterBottom = () => {
  const secondaryColor = Theme.colors.secondary;
  return (
    <FooterBottomStyle>
      <Title fontSize="30px" text="Newsletter" />
      <Line
        margin="15px 0 0 0"
        height="3px"
        width="33.5%"
        backgroundColor={secondaryColor}
      />

      <FormComponent
        margin="40px 0 0 0"
        flexD="column"
        gap="16px"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input />
        <ButtonComponent width="100%" text="Enviar" />
      </FormComponent>
    </FooterBottomStyle>
  );
};

export default FooterBottom;
