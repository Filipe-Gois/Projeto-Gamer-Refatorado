import { ParagraphStyle } from "./style";

type ParagraphProps = {
  text: string;
  textColor?: string;
  textAlign?: string;
  fontSize?: string;
};

const Paragraph = ({
  text,
  textColor,
  textAlign,
  fontSize,
}: ParagraphProps) => {
  return (
    <ParagraphStyle
      $fontSize={fontSize}
      $textAlign={textAlign}
      $textColor={textColor}
    >
      {text}
    </ParagraphStyle>
  );
};

export default Paragraph;
