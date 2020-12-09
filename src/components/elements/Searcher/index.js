'use strict';
import Component from './Searcher';
import { connect } from 'react-redux';
import withSearcher from '../../../utils/hoc/withArtistSearcher';
import { setArtistAndAlbum } from '../../../redux/actions';

export default connect(
      (store) => ({
            isLinkVisible: store?.navLink?.isVisible,
            initialData: store.addInitialData,
      }),
      { setArtistAndAlbum: setArtistAndAlbum },
       null,
      {forwardRef : true},
)(withSearcher(Component));
