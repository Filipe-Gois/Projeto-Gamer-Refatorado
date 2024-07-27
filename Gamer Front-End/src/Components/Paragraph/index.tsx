import { ParagraphStyle } from "./style";

type ParagraphProps = {
  text: string;
  textColor?: string;
  textAlign?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
};

const Paragraph = ({
  text,
  textColor,
  textAlign,
  fontSize,
  fontFamily,
  fontWeight,
}: ParagraphProps) => {
  return (
    <ParagraphStyle
      $fontWeight={fontWeight}
      $fontFamily={fontFamily}
      $fontSize={fontSize}
      $textAlign={textAlign}
      $textColor={textColor}
    >
      {text}
    </ParagraphStyle>
  );
};

export default Paragraph;
