import styled from "styled-components";

export const BannerJogosStyle = styled.section`
  width: 100%;
  height: 590px;
  background-color: ${(props) => props.theme.colors.primary};

  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;

export const BannerJogosContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
  }
`;
