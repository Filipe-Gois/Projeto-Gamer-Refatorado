import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

type NavbarProps = {
  $exibenavbar: string;
};

type LiNavProps = {
  $isLast?: boolean;
};

export const NavbarStyle = styled.nav<NavbarProps>`
  width: 72vw;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  padding: 0 0 20px 0;
  bottom: 0;
  transition: left 0.5s ease-in-out, opacity 0.6s;
  left: ${(props) => (props.$exibenavbar === "true" ? "0" : "-72vw")};
  z-index: 5;
  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme.colors.primary} , rgba(27,20,38,0.7),  rgba(27,20,38,0.4))`};
`;

export const UlNav = styled.ul`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  list-style: none;
`;
export const LiNav = styled.li<LiNavProps>`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    !props.$isLast &&
    css`
      border-bottom: 2px solid ${props.theme.colors.secondary};
    `};
`;

export const LinkNav = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 100%;
  align-self: center;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const MidiasSociaisBox = styled.div`
  display: flex;
  gap: 43px;
`;
