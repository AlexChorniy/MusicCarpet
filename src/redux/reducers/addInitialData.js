'use strict';

const initialState = {
    loading: false,
    data: [],
    error: null,
    initialData: [],
};

import {
    ADD_DATA_STARTED,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAILURE,
    SET_ARTIST_AND_ALBUM,
    GET_ALL_ALBUMS,
} from '../actions/types';


const data = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_DATA_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: [...payload],
                initialData: [...payload],
            };
        case ADD_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case SET_ARTIST_AND_ALBUM:
            const { initialData } = state;
            const { album, artistName } = payload;
            const newData = initialData.filter((item) =>
                item?.name.indexOf(album) >= 0 && item?.artist?.name.indexOf(artistName) >= 0);
            return {
                ...state,
                loading: false,
                error: null,
                data: [...newData],
            };
        case GET_ALL_ALBUMS:
            return {
                ...state,
                loading: false,
                error: null,
                data: [...state.initialData],
            };
        default:
            return state;
    }
};

export default data;
