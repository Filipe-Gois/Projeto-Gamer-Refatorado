import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 140px;
  }
`;
