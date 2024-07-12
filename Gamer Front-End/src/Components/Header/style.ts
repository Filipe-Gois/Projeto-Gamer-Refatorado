import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
`;
