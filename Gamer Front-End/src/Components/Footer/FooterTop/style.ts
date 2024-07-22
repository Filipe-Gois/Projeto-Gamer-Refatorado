import styled from "styled-components";

export const FooterTopStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 91px;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 50%;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 0;
  }
`;

export const FooterLogoImg = styled.img`
  margin-bottom: 41px;
`;

export const SociaisBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 55px;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 15%;
  }
`;

export const IconBoxYellow = styled.a.attrs({
  target: "_blank",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 10px;
  border-radius: 8px;
  border: none;
`;

export const LiFooter = styled.li`
  list-style: none;
`;
