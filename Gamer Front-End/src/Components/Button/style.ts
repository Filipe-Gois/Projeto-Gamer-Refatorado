import styled from "styled-components";

type ButtonProps = {
  $backgroundColor?: string;
  $textColor?: string;
  $fontSize?: string;
  $width?: string;
  $height?: string;
  $margin?: string;
  $widthResponsivo?: string;
};

export const ButtonStyle = styled.button<ButtonProps>`
  margin: ${(props) => props.$margin || "0"};
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
  font-family: ${(props) => props.theme.fonts.titilliumWeb};
  font-weight: 700;

  @media screen and (min-width: 768px) {
    width: ${(props) => props.$widthResponsivo || "100%"};
  }

  @keyframes Animation {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.05);
    }
  }

  &:hover {
    animation-name: Animation;
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    box-shadow: 0 0 10px ${(props) => props.theme.colors.secondary};
    transition: all 0.2s ease-in-out;
  }
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
