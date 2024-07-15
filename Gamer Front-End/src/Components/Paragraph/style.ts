import styled from "styled-components";

type ParagraphProps = {
  $textColor?: string;
  $textAlign?: string;
  $fontSize?: string;
};

export const ParagraphStyle = styled.h3<ParagraphProps>`
  color: ${(props) => props.$textColor || props.theme.colors.tertiary};
  font-size: ${(props) => props.$fontSize || "13px"};
  text-align: ${(props) => props.$textAlign || "start"};
`;
