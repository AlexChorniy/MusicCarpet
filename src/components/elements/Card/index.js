import Component from './Card';
import { connect } from 'react-redux';
import { setArtistDataRequest } from '../../../redux/actions';

export default connect(
      (store) => ({
            initialData: store.addInitialData,
      }),
      {
            getArtistDetailInfo: setArtistDataRequest,
      },
)(Component);