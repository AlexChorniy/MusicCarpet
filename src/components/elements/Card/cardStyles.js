import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
      max-height: 120px;
      width: 95px;
`;

export const TopBlock = styled.div`
      height: 65%;
`;
export const BottomBlock = styled.div`
      height: 35%;
      padding-top: 5px;
      padding-left: 2px;
`
export const LinkDetail = styled(Link)`
      text-decoration: none;
`;


export const LinkImg = styled.a.attrs(({href}) => ({
  href,
}))`
      display: block;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
`;

export const Img = styled.img.attrs(({src}) => ({
  src,
}))`
      width: 100%;
      height: 100%;
`;
