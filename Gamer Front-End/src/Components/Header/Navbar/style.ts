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

  @media screen and (min-width: 768px) {
    flex-direction: row;
    position: static;
    padding: 0;
    background-color: transparent;
    width: max-content;
    height: 100%;
    bottom: auto;
    left: auto;
  }
`;

export const UlNav = styled.ul`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  list-style: none;

  @media screen and (min-width: 768px) {
    height: 100%;
    width: max-content;
    flex-direction: row;
    gap: 60px;
  }
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

  @media screen and (min-width: 768px) {
    height: 100%;
    width: max-content;
    border: none;
    flex-direction: row;
  }
`;

export const LiNavContato = styled(LiNav)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
