import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  @media screen and (min-width: 768px) {
    height: 140px;
  }
`;
