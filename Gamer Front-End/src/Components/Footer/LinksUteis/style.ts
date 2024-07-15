import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterLinksUteisStyle = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
`;

export const LinksUteisContent = styled.div`
  margin-top: 45px;
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  height: max-content;
`;

export const LinkUtilItem = styled(Link)`
  display: flex;
  width: max-content;
  height: max-content;
  align-items: center;
  gap: 15px;
  text-decoration: none;
`;
