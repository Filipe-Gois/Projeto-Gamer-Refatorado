import { styled } from "styled-components";

export const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  padding: 0 5px;
  color: ${(props) => props.theme.colors.tertiary};
  background-image: linear-gradient(
    to bottom right,
    rgba(239, 239, 239, 0.6),
    rgba(239, 239, 239, 0.1)
  );

  &::placeholder {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const InputBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: max-content;
`;

export const InputContentStyle = styled.div``;
