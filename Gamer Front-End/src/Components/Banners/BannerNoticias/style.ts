import styled from "styled-components";

import BackgroundNoticiasMobile from "../../../assets/images/bannerNoticiasMobile.png";
import BackgroundNoticiasTablet from "../../../assets/images/noticiasTablet.png";
import BackgroundNoticiasDesktop from "../../../assets/images/noticiasDesktop.png";

export const BannerNoticiasStyle = styled.section.attrs({
  id: "noticias-section",
})`
  width: 100%;
  background-image: url(${BackgroundNoticiasMobile});
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;

  @media screen and (min-width: 768px) {
    background-image: url(${BackgroundNoticiasTablet});
    height: 800px;
  }

  @media screen and (min-width: 1200px) {
    background-image: url(${BackgroundNoticiasDesktop});
    height: 1175px;
  }
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
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
