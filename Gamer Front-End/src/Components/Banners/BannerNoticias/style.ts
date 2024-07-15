import styled from "styled-components";

import BackgroundNoticiasMobile from "../../../assets/images/bannerNoticiasMobile.png";

export const BannerNoticiasStyle = styled.section.attrs({
  id: "noticias-section",
})`
  width: 100%;
  background-image: url(${BackgroundNoticiasMobile});
  background-repeat: no-repeat;
  background-size: cover;
  height: 3675px;

  /* backdrop-filter: blur(8px); */
`;

export const BannerNoticiasContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  flex-direction: column;
  align-items: center;
`;

export const NoticiasBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    /* flex-wrap: wrap; */
  }
`;
