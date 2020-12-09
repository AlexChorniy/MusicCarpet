import React, { forwardRef } from 'react';
import withSearcher from '../../utils/hoc/withArtistSearcher';

import Component from './App';
import { connect } from 'react-redux';
import { setInitiaDataRequest } from '../../redux/actions';

export default connect(
      () => ({}),
      { setInitiaDataRequest },
)(Component);
