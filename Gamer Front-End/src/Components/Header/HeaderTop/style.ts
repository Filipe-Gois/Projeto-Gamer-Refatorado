import styled from "styled-components";

export const HeaderTopStyle = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    height: 35%;
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
  }
`;

export const ContainerContato = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media screen and (min-width: 768px) {
    gap: 88px;
  }
  @media screen and (min-width: 1200px) {
    gap: 50px;
  }
`;
