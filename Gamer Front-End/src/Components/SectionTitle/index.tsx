import { SectionTitleStyle } from "./style";

type SubTitleProps = {
  text: string;
  textColor?: string;
  textAlign?: string;
  fontSize?: string;
};

const SectionTitle = ({
  text,
  textColor,
  textAlign,
  fontSize,
}: SubTitleProps) => {
  return (
    <SectionTitleStyle
      $fontSize={fontSize}
      $textAlign={textAlign}
      $textColor={textColor}
    >
      {text}
    </SectionTitleStyle>
  );
};

export default SectionTitle;
