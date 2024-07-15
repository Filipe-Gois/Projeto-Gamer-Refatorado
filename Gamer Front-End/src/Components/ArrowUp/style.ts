import styled from "styled-components";

export const ArrowUpStyle = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 7px;
  border-radius: 8px;
  position: fixed;
  bottom: 90px;
  right: 5vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
