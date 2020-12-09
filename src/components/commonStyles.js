import styled from 'styled-components';
import { device } from '../assets/responsiveScale';
import { themes } from '../assets/themes';

export const Text = styled.div`
      padding-left: ${({ pLeft }) => pLeft || 0};
      padding-top: ${({ pTop }) => pTop || 0};
      padding: ${({ padding }) => padding || 0};
      font-size: ${({ fSize }) => fSize || '10px'};
      font-weight: ${({ fWeight }) => fWeight || 'normal'};
      font-family: ${({ fFamily }) => fFamily || 'ProximaRegular'};
      color: ${({ color }) => color || themes.black};
      margin: ${({ margin }) => margin || null};
      margin-left: ${({ mLeft }) => mLeft || 0};
      margin-top: ${({ mTop }) => mTop || 0};
      text-align: ${({ tAlign }) => tAlign || null};
      line-height: ${({ lHeight }) => lHeight || null};
      height: ${({ height }) => height || null};
      width: ${({ width }) => width || null};
      display: ${({ display }) => display || null};
      justify-content:  ${({ jContent }) => jContent || null};
      justify-items:  ${({ jItems }) => jItems || null};
      justify-self:  ${({ jSelf }) => jSelf || null};
      align-items:  ${({ aItems }) => aItems || null};
      align-self:  ${({ aSelf }) => aSelf || null};
      text-overflow: ${({ tOverflow }) => tOverflow || null};
      overflow: ${({ overflow }) => overflow || null};
      overflow-x: ${({ overflowX }) => overflowX || null};
      overflow-y: ${({ overflowY }) => overflowY || null};
      white-space: ${({ wSpace }) => wSpace || null};
      cursor: ${({ cursor }) => cursor || null};
      &:hover {
            color: ${({ hColor }) => hColor || null};
      }
      @media ${device.mobileML} {
            margin-top: ${({ mediaMobileMLMTop }) => mediaMobileMLMTop || null};
            text-align: ${({ mediaMobileMLTAlign }) => mediaMobileMLTAlign || null};         
            font-size: ${({ mediaMobileMLFSize }) => mediaMobileMLFSize || null};
      }
      @media ${device.mobileL} { 
            text-align: ${({ mediaMobileLTAlign }) => mediaMobileLTAlign || null};         
            font-size: ${({ mediaMobileLFSize }) => mediaMobileLFSize || null};
      }
      @media ${device.tablet} { 
            margin-top: ${({ mediaTabletMTop }) => mediaTabletMTop || null};
            font-size: ${({ mediaTabletFSize }) => mediaTabletFSize || null};
      }
      @media ${device.tabletL} { 
            margin-top: ${({ mediaTabletLMTop }) => mediaTabletLMTop || null};
            font-size: ${({ mediaTabletLFSize }) => mediaTabletLFSize || null};
            height: ${({ mediaTabletLHeight }) => mediaTabletLHeight || null};
            width: ${({ mediaTabletLWidth }) => mediaTabletLWidth || null};
      }
`;

export const Img = styled.img.attrs(({ src }) => ({
      src,
}))`
      height: ${({ height }) => height || '100%'};
      width: ${({ width }) => width || '100%'};
      position: ${({ position }) => position || null};
      left: ${({ left }) => left || null};
      top: ${({ top }) => top || null};
`;

export const Reference = styled.a.attrs(({href}) => ({
      href,
}))`
      height: ${({ height }) => height || null};
      width: ${({ width }) => width || null};
`;
