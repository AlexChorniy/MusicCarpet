'use strict';
import { combineReducers } from 'redux';
import addInitialData from './addInitialData';
import artistInf from './addArtistData';
import navLink from './navLink';

export default combineReducers({
    addInitialData,
    artistInf,
    navLink,
});
