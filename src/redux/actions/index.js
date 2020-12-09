"use strict";
import axios from 'axios';
import {
      addDataStarted,
      addDataSuccess,
      addDataFailure,
      addArtistDataStarted,
      addArtistDataSuccess,
      addArtistDataFailure,
      toggleNavLink,
      setArtistAndAlbumData,
      getAlbums,
} from './secondaryFunctions';

const URL = "http://ws.audioscrobbler.com";
const API_KEY = "1fbd45f167a9e4dd3e6f1c5bbe02cc23";
const GET_TOP_ALBUMS = `/2.0/?method=artist.gettopalbums&artist=cher&api_key=${API_KEY}&format=json`;

export function setInitiaDataRequest() {
      return (dispatch) => {
            dispatch(addDataStarted());
            axios.get(`${URL}${GET_TOP_ALBUMS}`)
                  .then(function (response) {
                        dispatch(addDataSuccess(response.data));
                  })
                  .catch(function (error) {
                        dispatch(addDataFailure(error));
                  })
      }
};

export function setArtistDataRequest(ArtistName) {
      const GET_ARTIST_INFO = `/2.0/?method=artist.getinfo&artist=${ArtistName}&api_key=${API_KEY}&format=json`;

      return (dispatch) => {
            dispatch(addArtistDataStarted());
            axios.get(`${URL}${GET_ARTIST_INFO}`)
                  .then(function (response) {
                        dispatch(addArtistDataSuccess(response.data));
                  })
                  .catch(function (error) {
                        dispatch(addArtistDataFailure(error));
                  })
      }
};

export function navLinkHandler(obj) {
      const { isVisible } = obj;
      return (dispatch) => {
            dispatch(toggleNavLink(isVisible));
      };
};

export function setArtistAndAlbum(obj) {
      return (dispatch) => {
            dispatch(setArtistAndAlbumData(obj));
      };
}

export function getAllAlbums(obj) {
      return (dispatch) => {
            dispatch(getAlbums());
      };
}
