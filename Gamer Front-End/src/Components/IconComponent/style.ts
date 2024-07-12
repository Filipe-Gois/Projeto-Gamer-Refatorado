import styled from "styled-components";

type IconProps = {
  colorSvg?: string;
};

type PathProps = {
  colorSvg?: string;
};

export const IconStyle = styled.svg.attrs<IconProps>({
  width: 20,
  height: 20,
})`
  fill: ${(props) => props.colorSvg || "none"};
`;
export const PathStyle = styled.path.attrs<PathProps>((props) => ({
  fill: props.colorSvg || props.theme.colors.tertiary,
}))``;
