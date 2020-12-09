'use strict';
import React from 'react';
import { uuid } from '../../../utils/helpers';
import {
      Wrapper,
      Container,
      TagLink,
} from './tagStyles';

export default ({ data, mTop }) => {
      const test = [{ name: 'pop' }, { name: 'frame' }, { name: 'vocalist' }];
      const tags = data
            .map((item, idx) =>
                  <TagLink key={uuid()} href={item?.url || '#'}>
                        {item?.name || idx}
                  </TagLink>)
      return (
            <Wrapper mTop={mTop}>
                  <Container>{tags}</Container>
            </Wrapper>
      )
};