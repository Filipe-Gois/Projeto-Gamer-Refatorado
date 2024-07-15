import styled from "styled-components";

type TitleProps = {
  $textColor?: string;
  $textAlign?: string;
  $fontSize?: string;
};

export const TitleStyle = styled.h1<TitleProps>`
  color: ${(props) => props.$textColor || props.theme.colors.tertiary};
  font-size: ${(props) => props.$fontSize || "18px"};
  text-align: ${(props) => props.$textAlign || "start"};
`;
