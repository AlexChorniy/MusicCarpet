import Component from './NavPanel';
import { connect } from 'react-redux';
import { getAllAlbums } from '../../../redux/actions';

export default connect(
      (store) => ({
            isLinkVisible: store?.navLink?.isVisible,
      }),
      {getAllAlbums},
)(Component);