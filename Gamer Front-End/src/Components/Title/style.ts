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
  font-family: ${(props) => props.theme.fonts.titilliumWeb};
  font-weight: 900;
`;

export const TitleLoginStyle = styled(TitleStyle)`
  font-size: 28px;
  border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;
