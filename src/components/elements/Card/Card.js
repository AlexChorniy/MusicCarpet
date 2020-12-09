'use strict';
import React from 'react';
import { Text, Img } from '../../commonStyles';
import defaultImg from '../../../assets/images/camera.png'

import {
      Container,
      TopBlock,
      BottomBlock,
      LinkImg,
      LinkDetail,
} from './cardStyles';

export default ({ options, getArtistDetailInfo }) => {
      const imgData = options?.image.filter(item => item.size === 'medium')[0];
      const imgSrc = !!imgData['#text'] && imgData['#text'] || defaultImg;
      const imgSize = !!imgData['#text'] || { height: '15px', width:"15px" };
      const artistName = options?.artist?.name || 'Unknown artist';
      const songName = options?.name || 'Unknown song';
      const url = options?.url || '#';
      function linkClickHandler() {
            getArtistDetailInfo(artistName);
      }

      return (
            <Container>
                  <TopBlock>
                        <LinkImg href={url}>
                              <Img height={imgSize?.height} width={imgSize?.width} src={imgSrc} />
                        </LinkImg>
                  </TopBlock>
                  <BottomBlock>
                        <LinkDetail to="/details">
                              <Text
                                    fSize="9px"
                                    fWeight="bold"
                                    cursor="pointer"
                                    onClick={linkClickHandler}
                              >
                                    {artistName}
                              </Text>
                        </LinkDetail>
                        <Text
                              fSize="9px"
                              fWeight="bold"
                              tOverflow="ellipsis"
                              overflow="hidden"
                              width="100%"
                              wSpace="nowrap"
                              mTop="5px"
                        >
                              {songName}
                        </Text>
                  </BottomBlock>
            </Container>
      )
};