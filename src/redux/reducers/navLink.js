'use strict';

const initialState = {
    isVisible: false,
};

import {
      TOGGLE_HIDE_NAV_LINK
} from '../actions/types';


const data = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_HIDE_NAV_LINK:
            return {
                  ...state,
                  isVisible: payload,
            };
        default:
            return state;
    }
};

export default data;