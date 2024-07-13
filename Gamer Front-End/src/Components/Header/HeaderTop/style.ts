import styled from "styled-components";

export const HeaderTopStyle = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    height: 35%;
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContainerContato = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
