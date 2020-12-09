import Component from './HomePage';
import { connect } from 'react-redux';
import { navLinkHandler } from '../../redux/actions';

export default connect(
      (store) => ({
            initialData: store.addInitialData,
      }),
      {isLinkVisible: navLinkHandler},
)(Component);