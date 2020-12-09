'use strict';
import styled from 'styled-components';
import { themes } from '../../../assets/themes';

export const Container = styled.div.attrs(({ ref }) => ({
      ref,
}))`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      min-width: 30%;
      padding-left: 5px;
      padding-right: 5px;
      position: relative;
`;

export const ShowInf = styled.div`
      display: ${({ display }) => display || null};
      position: absolute;
      top: 34px;
      left: 10px;
      font-family: ProximaLight;
      z-index: 20;
      background-color: ${themes.white};
      width: 95%;
      overflow: hidden;
      max-height: 100px;
      text-overflow: ellipsis;
      overflow-y: scroll;
      overflow-x: clip;
      white-space: nowrap;
`;

export const List = styled.ul.attrs(({ ref }) => ({
      ref,
}))``;
export const ListItem = styled.li`
      display: block;
      font-size: 12px;
      margin-top: 5px;
      padding-left: 2px;
      padding-right: 2px;
      cursor: pointer;
      display: flex;
      :hover {
            background-color: ${themes.lightGrey}
      }
`;

export const Strong = styled.strong`
      margin-left: ${({ mLeft }) => mLeft || null};
      width: ${({ mWidth }) => mWidth || null};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
`;