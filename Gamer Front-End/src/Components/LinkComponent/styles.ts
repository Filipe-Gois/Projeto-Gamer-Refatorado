import { Link } from "react-router-dom";
import styled from "styled-components";

type LinkProps = {
  $width?: string;
  $height?: string;
};

export const LinkStyle = styled(Link)<LinkProps>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "100%"};
  align-self: center;
  color: ${(props) => props.theme.colors.tertiary};
`;