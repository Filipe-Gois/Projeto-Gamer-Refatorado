import styled from "styled-components";

type ContainerProps = {
  $padding?: string;
  $flexD?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $margin?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexD || "column"};
  justify-content: ${(props) => props.$justifyContent || "center"};
  align-items: ${(props) => props.$alignItems || "center"};
  width: 100%;
  flex-wrap: wrap;
  height: 100%;
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;
export const GridLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5%;

  @media screen and (min-width: 768px) {
    padding: 0 10%;
  }
`;

export const MainContent = styled.main`
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    margin-top: 140px;
  }
`;
