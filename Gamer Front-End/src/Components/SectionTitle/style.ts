import styled from "styled-components";

type SectionTitleProps = {
  $textColor?: string;
  $textAlign?: string;
};

export const SectionTitleStyle = styled.h3<SectionTitleProps>`
  color: ${(props) => props.$textColor || props.theme.colors.tertiary};
  font-size: 16px;
  text-align: ${(props) => props.$textAlign || "start"};
`;
