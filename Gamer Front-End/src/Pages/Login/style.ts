import styled from "styled-components";
import BackGroundLoginMobile from "../../assets/images/BackGroundLoginMobile.png";
import BackGroundLoginTablet from "../../assets/images/BackGroundLoginTablet.png";
import BackGroundLoginDesktop from "../../assets/images/BackGroundLoginDesktop.png";

export const BannerLoginStyle = styled.section`
  width: 100%;
  height: 756px;
  background-image: url(${BackGroundLoginMobile});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${BackGroundLoginTablet});
    height: 700px;
  }
  @media screen and (min-width: 1200px) {
    background-image: url(${BackGroundLoginDesktop});
    height: 680px;
  }
`;

export const BannerLoginBlur = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
`;

export const BannerLoginContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
