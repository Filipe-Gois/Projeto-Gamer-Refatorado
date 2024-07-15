import styled from "styled-components";

type ButtonProps = {
  $backgroundColor?: string;
  $textColor?: string;
  $fontSize?: string;
  $width?: string;
  $height?: string;
};

export const ButtonStyle = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.$backgroundColor || props.theme.colors.secondary};
  border-radius: 10px;
  height: ${(props) => props.$height || "40px"};
  width: ${(props) => props.$width || "200px"};
  outline: none;
  border: none;
  color: ${(props) => props.$textColor || props.theme.colors.primary};
  font-size: ${(props) => props.$fontSize || "24px"};
  cursor: pointer;
`;

export const ButtonTrapezioStyle = styled(ButtonStyle)`
  font-size: 16px;
  border-radius: 0;
  background-color: transparent;
  position: relative;
  z-index: 3;
  left: 20px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 15px;
    width: 80%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
    transform: skewX(-40deg);
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
