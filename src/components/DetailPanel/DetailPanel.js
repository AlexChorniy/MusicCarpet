'use strict';
import React, { useEffect, useState } from 'react';

import {
      Wrapper,
      Container,
      TopBlock,
      Title,
} from './detailStyles';
import { Text, Img } from '../commonStyles';
import loader from '../../assets/images/loader.gif';
import TagBlock from '../elements/Tag';
import { workWithLS } from '../../utils/helpers';
const { setData: setDataToLS, getData: getDataFromLS } = workWithLS;

export default ({ getArtistInf: { data, loading }, isLinkVisible }) => {
      const [dataInf, setDataInf] = useState({ name: '', image: [{ size: 'initial', "#text": '#' }], bio: '', tags: { tag: [] } });
      useEffect(() => { isLinkVisible({ isVisible: true }) }, []);
      useEffect(() => {
            if (data?.name) {
                  setDataInf(data);
                  const dataToJSON = JSON.stringify(data);
                  setDataToLS('detailInf', dataToJSON);
            }
            else if (!!getDataFromLS('detailInf')) {
                  const dataFromJSON = JSON.parse(getDataFromLS('detailInf'));
                  setDataInf(dataFromJSON);
            }
      }, [data]);
      const artistName = dataInf?.name || "Unknown artist";
      const imgSrc = dataInf?.image?.filter(item => item.size === 'small' || 'initial')[0]['#text'] || '';
      const bioInf = dataInf?.bio || '';
      const tags = dataInf?.tags?.tag || [];

      return (
            <Wrapper>
                  {
                        loading &&
                        <Img
                              position="absolute"
                              left="50%"
                              top="50%"
                              height="30px"
                              width="30px"
                              src={loader}
                        />
                  }
                  <TopBlock imgUrl={imgSrc}>
                        <Container>
                              <Title>{artistName}</Title>
                        </Container>
                  </TopBlock>
                  <Container
                        display="flex"
                        jContent="space-between"
                        mediaTabletFDirection="column-reverse"
                  >
                        <Text
                              width="40%"
                              height="200px"
                              tAlign="justify"
                              mTop="20px"
                              fSize="12px"
                              tOverflow="ellipsis"
                              overflowY="scroll"
                              overflow-x="clip"
                              padding="5px"
                              wSpace="pre-wrap"
                        >
                              {bioInf?.content}
                        </Text>
                        <TagBlock data={tags} mTop="20px" />
                  </Container>
            </Wrapper>
      )
};