import styled from "styled-components";

type SideBarProps = {
  $exibeSideBar?: string;
};

export const SideBarStyle = styled.div<SideBarProps>`
  width: 20vw;
  height: 25vh;

  position: absolute;
  top: 60px;
  transition: right 0.5s ease-in-out, opacity 0.6s;
  right: ${(props) => (props.$exibeSideBar === "true" ? "0" : "-20vw")};
  z-index: 5;
  background-color: red;
`;
