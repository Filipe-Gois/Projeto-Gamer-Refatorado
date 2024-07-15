import styled from "styled-components";

export const HeaderBottomStyle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;

  @media screen and (min-width: 768px) {
    height: 65%;
    padding: 0 10%;
  }
`;
