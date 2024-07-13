import styled from "styled-components";

type IconProps = {
  $fillSvg?: string;
  $strokeSvg?: string;
};

type PathProps = {
  $fillPath?: string;
  $strokePath?: string;
};

export const IconStyle = styled.svg.attrs<IconProps>((props) => ({
  width: 20,
  height: 20,
  fill: props.$fillSvg || "none",
  stroke: props.$strokeSvg || "none",
}))`
  /* fill: ${(props) => props.fill || "none"}; */
`;
export const PathStyle = styled.path.attrs<PathProps>((props) => ({
  fill: props.$fillPath || props.theme.colors.tertiary,
  stroke: props.$strokePath || "none",
}))``;
