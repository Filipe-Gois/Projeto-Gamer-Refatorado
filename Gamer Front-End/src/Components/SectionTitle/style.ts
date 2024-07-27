import styled from "styled-components";

type SectionTitleProps = {
  $textColor?: string;
  $textAlign?: string;
  $fontSize?: string;
};

export const SectionTitleStyle = styled.h3<SectionTitleProps>`
  color: ${(props) => props.$textColor || props.theme.colors.tertiary};

  font-size: ${(props) => props.$fontSize || "24px"};
  text-align: ${(props) => props.$textAlign || "start"};
  font-family: ${(props) => props.theme.fonts.titilliumWeb};
  font-weight: 900;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
