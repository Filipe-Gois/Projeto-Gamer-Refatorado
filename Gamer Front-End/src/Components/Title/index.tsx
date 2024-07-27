import { TitleLoginStyle, TitleStyle } from "./style";

type TitleProps = {
  text: string;
  textColor?: string;
  textAlign?: string;
  fontSize?: string;
};

const Title = ({ text, textColor, textAlign, fontSize }: TitleProps) => (
  <TitleStyle
    $fontSize={fontSize}
    $textAlign={textAlign}
    $textColor={textColor}
  >
    {text}
  </TitleStyle>
);

const TitleLogin = ({ text, textColor, textAlign, fontSize }: TitleProps) => (
  <TitleLoginStyle
    $fontSize={fontSize}
    $textAlign={textAlign}
    $textColor={textColor}
  >
    {text}
  </TitleLoginStyle>
);

export { TitleLogin };
export default Title;
