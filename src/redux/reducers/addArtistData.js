'use strict';

const initialState = {
      loading: false,
      data: [],
      error: null,
};

import {
      ADD_ARTIST_DATA_STARTED,
      ADD_ARTIST_DATA_SUCCESS,
      ADD_ARTIST_DATA_FAILURE,
} from '../actions/types';


const data = (state = initialState, { type, payload }) => {
      switch (type) {
            case ADD_ARTIST_DATA_STARTED:
                  return {
                        ...state,
                        loading: true,
                  };
            case ADD_ARTIST_DATA_SUCCESS:
                  return {
                        ...state,
                        loading: false,
                        error: null,
                        data: { ...payload },
                  };
            case ADD_ARTIST_DATA_FAILURE:
                  return {
                        ...state,
                        loading: false,
                        error: payload,
                  };
            default:
                  return state;
      }
};

export default data;