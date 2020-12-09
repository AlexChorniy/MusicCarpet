import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.nav`
      height: 25px;
      min-width: 30%;
      display: flex;
      justify-content: space-around;
      align-items: center;
`;

export const ButtonWithLink = styled(Link)`
      display: ${({display}) => display || 'none'};
      text-decoration: none;
`;

export const BtnAllAlbums = styled.div`
      display: ${({display}) => display || 'none'};
      cursor: pointer;
`