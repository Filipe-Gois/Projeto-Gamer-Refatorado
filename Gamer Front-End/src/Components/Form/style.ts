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
`;
