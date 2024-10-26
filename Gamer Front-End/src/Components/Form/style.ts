import styled from "styled-components";

type FormProps = {
  $gap?: string;
  $flexD?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $margin?: string;
};

export const FormStyle = styled.form<FormProps>`
  display: flex;
  gap: ${(props) => props.$gap || "0px"};
  flex-direction: ${(props) => props.$flexD || "row"};
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  align-items: ${(props) => props.$alignItems || "center"};
  margin: ${(props) => props.$margin || "0"};
  font-family: ${(props) => props.theme.fonts.titilliumWeb};
  font-weight: 400;
  font-size: 16px;
`;

export const FormStyleLogin = styled(FormStyle)`
  width: 100%;
  height: 61%;
  justify-content: space-evenly;
  padding: 5% 7%;
  border-radius: 8px;
  background-image: linear-gradient(
    to left bottom,
    rgba(27, 20, 38, 0.6),
    rgba(60, 3, 65, 0.38)
  );
  border: 0.5px solid ${(props) => props.theme.colors.tertiary};
  backdrop-filter: blur(10px);
  flex-direction: column;
`;
