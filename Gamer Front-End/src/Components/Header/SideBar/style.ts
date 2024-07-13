import styled from "styled-components";
import { LiNav, UlNav } from "../Navbar/style";

type SideBarProps = {
  $exibeSideBar?: string;
};

export const SideBarStyle = styled.div<SideBarProps>`
  width: 20vw;
  height: 25vh;
  position: fixed;
  top: 60px;
  transition: right 0.5s ease-in-out, opacity 0.6s;
  right: ${(props) => (props.$exibeSideBar === "true" ? "0" : "-20vw")};
  z-index: 5;
  background-image: ${(props) =>
    `linear-gradient(to bottom left, ${props.theme.colors.primary} , rgba(27,20,38,0.7),  rgba(27,20,38,0.4))`};

  @media screen and (min-width: 768px) {
    position: static;
    height: 100%;
    width: max-content;
    border: none;
    flex-direction: row;
  }
`;

export const UlSideBar = styled(UlNav)`
  height: 100%;

  @media screen and (min-width: 768px) {
    position: static;
    height: 100%;
    width: max-content;
    border: none;
    flex-direction: row;

    gap: 25px;
  }
`;
export const LiSideBar = styled(LiNav)`
  border: none;

  @media screen and (min-width: 768px) {
    height: 100%;
    width: max-content;
  }
`;
