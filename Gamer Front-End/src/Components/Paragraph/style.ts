import styled from "styled-components";

type ParagraphProps = {
  $textColor?: string;
  $textAlign?: string;
  $fontSize?: string;
  $fontFamily?: string;
  $fontWeight?: string;
};

export const ParagraphStyle = styled.h3<ParagraphProps>`
  color: ${(props) => props.$textColor || props.theme.colors.tertiary};
  font-size: ${(props) => props.$fontSize || "13px"};
  text-align: ${(props) => props.$textAlign || "start"};
  font-family: ${(props) => props.$fontFamily || props.theme.fonts.quickSand};
  font-weight: ${(props) => props.$fontWeight || "400"};
  line-height: 1.4;
`;
