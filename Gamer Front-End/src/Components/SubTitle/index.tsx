import { SubTitleStyle } from "./style";

type SubTitleProps = {
  text: string;
  textColor?: string;
  textAlign?: string;
  margin?: string;
};

const SubTitle = ({ text, textColor, textAlign, margin }: SubTitleProps) => {
  return (
    <SubTitleStyle
      $margin={margin}
      $textAlign={textAlign}
      $textColor={textColor}
    >
      {text}
    </SubTitleStyle>
  );
};

export default SubTitle;
