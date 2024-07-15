import styled from "styled-components";

type LineProps = {
  $width?: string;
  $backgroundColor?: string;
  $alignSelf?: string;
  $margin?: string;
  $height?: string;
};

export const LineStyle = styled.div<LineProps>`
  height: ${(props) => props.$height || "2px"};
  width: ${(props) => props.$width || "100%"};
  background-color: ${(props) =>
    props.$backgroundColor || props.theme.colors.primary};
  margin: ${(props) => props.$margin || "0"};

  display: flex;
  align-self: ${(props) => props.$alignSelf || "auto"};
`;
