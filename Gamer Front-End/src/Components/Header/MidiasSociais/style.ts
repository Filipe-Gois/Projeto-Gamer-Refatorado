import styled from "styled-components";

type MidiasSociaisProps = {
  $display?: string;
  $gap?: string;
};

export const MidiasSociaisBox = styled.div<MidiasSociaisProps>`
  display: flex;
  gap: 4vw;

  @media screen and (min-width: 768px) {
    display: ${(props) => props.$display || "none"};
    gap: ${(props) => props.$gap || "43px"};
  }
`;
