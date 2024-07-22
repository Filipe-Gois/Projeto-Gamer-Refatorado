import styled from "styled-components";

export const FooterContatosStyle = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 50%;
    width: 50%;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 0;
  }
`;

export const FooterContatosContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
`;

export const ParagraphContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
