import styled from 'styled-components';
import { themes } from '../../../assets/themes';

export const Wrapper = styled.div`
      margin-top: ${({ mTop }) => mTop || 0};
      width: 100%;
`;

export const Container = styled.div`
      display: flex;
      font-family: ProximaSemibold;
`;

export const TagLink = styled.a.attrs(({href}) => ({href}))`
      display: inline-block;
      border-radius: 3px;
      text-decoration: none;
      color: ${themes.lightBlue};
      border: 1px solid ${themes.lightBlue};
      max-width: 150px;
      max-height: 40px;
      margin-left: 10px;
      font-size: 14px;
      padding: 5px 15px 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
            color: ${themes.lightGrey};
            border-color: ${themes.grey};
      };
`;