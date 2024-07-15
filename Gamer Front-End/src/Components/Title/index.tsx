import { TitleStyle } from "./style";

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

export default Title;
