import styled from 'styled-components';
import { themes } from '../../assets/themes';
import { device } from '../../assets/responsiveScale';

export const Wrapper = styled.div`
      grid-column: 1/15;
      grid-row: 2;
      position: relative;
`;

export const Container = styled.div`
      width: 90%;
      margin: 0 auto;
      display: ${({ display }) => display || null};
      justify-content:  ${({ jContent }) => jContent || null};
      margin-top: ${({ mTop }) => mTop || 0};
      @media ${device.tablet} {
            flex-direction: ${({ mediaTabletFDirection }) => mediaTabletFDirection || null};
            margin-top: ${({ mediaTabletMTop }) => mediaTabletMTop || null};
            font-size: ${({ mediaTabletFSize }) => mediaTabletFSize || null};
      }
`;

export const TopBlock = styled.div`
      height: 270px;
      margin-top: 20px;
      padding-top: 50px;
      background-color: ${themes.lightGrey};
      background-image: url(${({imgUrl}) => imgUrl || "#"});
`;

export const Title = styled.h2`
      font-size: 48px;
      font-weight: bolder;
      font-family: ProximaBold;
      margin-left: 50px;
`;