import { ButtonStyle, ButtonTrapezioStyle } from "./style";

type ButtonProps = {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
  fontSize?: string;
  width?: string;
  height?: string;
};

const ButtonComponent = ({
  onClick,
  text = "",
  backgroundColor,
  textColor,
  fontSize,
  width,
  height,
}: ButtonProps) => {
  return (
    <ButtonStyle
      $width={width}
      $height={height}
      $fontSize={fontSize}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      onClick={onClick}
    >
      {text}
    </ButtonStyle>
  );
};

const ButtonCardJogos = ({
  onClick,
  text = "",
}: // backgroundColor,
// textColor,
// fontSize,
ButtonProps) => {
  return <ButtonTrapezioStyle onClick={onClick}>{text}</ButtonTrapezioStyle>;
};

export { ButtonCardJogos };
export default ButtonComponent;
