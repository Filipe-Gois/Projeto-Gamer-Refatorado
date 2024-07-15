import { SectionTitleStyle } from "./style";

type SubTitleProps = {
  text: string;
  textColor?: string;
  textAlign?: string;
};

const SectionTitle = ({ text, textColor, textAlign }: SubTitleProps) => {
  return (
    <SectionTitleStyle $textAlign={textAlign} $textColor={textColor}>
      {text}
    </SectionTitleStyle>
  );
};

export default SectionTitle;
