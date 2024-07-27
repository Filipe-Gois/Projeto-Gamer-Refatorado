import styled from "styled-components";

type SubTitleProps = {
  $textColor?: string;
  $textAlign?: string;
  $margin?: string;
};

export const SubTitleStyle = styled.h2<SubTitleProps>`
  color: ${(props) => props.$textColor || props.theme.colors.tertiary};
  font-size: 18px;
  text-align: ${(props) => props.$textAlign || "start"};
  margin: ${(props) => props.$margin || "0"};
  font-family: ${(props) => props.theme.fonts.titilliumWeb};
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media screen and (min-width: 768px) {
    letter-spacing: 6px;
    font-size: 30px;
  }

  @media screen and (min-width: 1200px) {
    letter-spacing: 10px;
    font-size: 40px;
  }
`;
