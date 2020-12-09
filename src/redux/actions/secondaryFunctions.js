'use strict';

import {
      ADD_DATA_STARTED,
      ADD_DATA_SUCCESS,
      ADD_DATA_FAILURE,
      ADD_ARTIST_DATA_STARTED,
      ADD_ARTIST_DATA_SUCCESS,
      ADD_ARTIST_DATA_FAILURE,
      TOGGLE_HIDE_NAV_LINK,
      SET_ARTIST_AND_ALBUM,
      GET_ALL_ALBUMS,
} from './types';

export const addDataSuccess = (data) => {
      const albums = data?.topalbums?.album;
      if (albums) return ({
            type: ADD_DATA_SUCCESS,
            payload: albums,
      })
      return [];
};

export const addDataStarted = () => ({
      type: ADD_DATA_STARTED,
});

export const addDataFailure = (error) => ({
      type: ADD_DATA_FAILURE,
      payload: error,
});

export const addArtistDataSuccess = (data) => {
      const artist = data?.artist;
      if (artist) return ({
            type: ADD_ARTIST_DATA_SUCCESS,
            payload: artist,
      })
      return [];
};

export const addArtistDataStarted = () => ({
      type: ADD_ARTIST_DATA_STARTED,
});

export const addArtistDataFailure = (error) => ({
      type: ADD_ARTIST_DATA_FAILURE,
      payload: error,
});

export const toggleNavLink = (bool) => ({
      type: TOGGLE_HIDE_NAV_LINK,
      payload: bool,
})

export const setArtistAndAlbumData = (obj) => ({
      type: SET_ARTIST_AND_ALBUM,
      payload: obj,
})

export const getAlbums = () => ({
      type: GET_ALL_ALBUMS,
})
