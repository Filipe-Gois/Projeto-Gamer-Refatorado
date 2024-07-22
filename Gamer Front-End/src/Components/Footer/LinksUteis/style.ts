import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterLinksUteisStyle = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    height: 50%;
    width: 50%;
  }

  @media screen and (min-width: 1200px) {
    margin: 0;
    height: 100%;
  }
`;

export const LinksUteisContent = styled.ul`
  margin-top: 45px;
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  height: max-content;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

export const LiLinksUteis = styled.li`
  list-style: none;
`;

export const LinkUtilItem = styled(Link)`
  display: flex;
  width: max-content;
  height: max-content;
  align-items: center;
  gap: 15px;
  text-decoration: none;
`;
