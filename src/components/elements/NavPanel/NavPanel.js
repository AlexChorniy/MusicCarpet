'use strict';
import React from 'react';

import { Container, ButtonWithLink, BtnAllAlbums } from './navStyles';

export default ({ isLinkVisible, getAllAlbums}) => (
      <Container>
            <ButtonWithLink to="/"
                  display={isLinkVisible ? "block" : "none"}
            >
                  Home
            </ButtonWithLink>
            <BtnAllAlbums
                  display={!isLinkVisible ? "block" : "none"}
                  onClick={getAllAlbums}
            >
                  All albums
            </BtnAllAlbums>
      </Container>
);
