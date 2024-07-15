import styled from "styled-components";
import Banner1Mobile from "../../../assets/images/banner1.png";
import Banner1Desktop from "../../../assets/images/banner1Desktop.png";
import { TitleStyle } from "../../Title/style";

export const BannerPrincipalStyle = styled.section`
  width: 100%;
  height: 606px;
  background-image: url(${Banner1Mobile});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 87px 0;
  @media screen and (min-width: 768px) {
    background-image: url(${Banner1Desktop});
    height: 750px;
    padding: 20px 0 75px 0;
  }
`;

export const TitleBanner1 = styled(TitleStyle)`
  text-shadow: 0 0 7px #fd4255;
  font-size: 40px;

  @media screen and (min-width: 768px) {
    font-weight: 900;
    font-size: 80px;
  }
`;
