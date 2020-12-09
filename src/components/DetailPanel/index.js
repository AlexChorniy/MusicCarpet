import Component from './DetailPanel';
import { connect } from 'react-redux';
import { navLinkHandler } from '../../redux/actions';

export default connect(
      (store) => ({
            getArtistInf: store.artistInf,
      }),
      {isLinkVisible: navLinkHandler},
)(Component);