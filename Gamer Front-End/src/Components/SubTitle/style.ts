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

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 40px;
  }
`;
