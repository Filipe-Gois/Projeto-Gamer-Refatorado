import styled from "styled-components";

type NavbarProps = {
  $exibenavbar: string;
};

export const NavbarStyle = styled.nav<NavbarProps>`
  width: 72vw;
  height: calc(100vh - 60px);

  position: absolute;
  bottom: 0;
  transition: left 0.5s ease-in-out, opacity 0.6s;
  left: ${(props) => (props.$exibenavbar === "true" ? "0" : "-72vw")};
  z-index: 5;
  background-color: red;
`;
