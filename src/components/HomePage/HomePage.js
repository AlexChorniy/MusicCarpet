import React, { useEffect } from 'react';
import { uuid } from '../../utils/helpers';

'use strict';
import { Container } from './homeStyles';
import Card from '../elements/Card';
import { Img } from '../commonStyles';
import loader from '../../assets/images/loader.gif';

export default ({ initialData, isLinkVisible }) => {
      const { data, loading } = initialData;
      useEffect(() => { isLinkVisible({ isVisible: false }) }, []);
      const arrWithData = Array.isArray(data) ? data : [];
      const Cards = arrWithData.map((item) => <Card key={uuid()} options={item} />);
      return (
            <Container>
                  {
                        false
                              ? <Img
                                    position="absolute"
                                    left="50%"
                                    top="50%"
                                    height="30px"
                                    width="30px"
                                    src={loader}
                              />
                              : Cards
                  }
            </Container>
      )
};