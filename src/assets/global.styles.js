import { createGlobalStyle } from 'styled-components';

import Bold from './Fonts/Proxima/ProximaNova-Bold.woff';
import Regular from './Fonts/Proxima/ProximaNova-Regular.woff';
import Semibold from './Fonts/Proxima/ProximaNova-Semibold.woff';
import Light from './Fonts/Proxima/ProximaNova-Light.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'ProximaBold';
        src: local('Proxima'), local('ProximaBold'),
        url(${Bold}) format('woff');
        font-display: block;
    };
    @font-face {
        font-family: 'ProximaRegular';
        src: local('Proxima'), local('ProximaRegular'),
        url(${Regular}) format('woff');
        font-display: block;
    };
    @font-face {
        font-family: 'ProximaSemibold';
        src: local('Proxima'), local('ProximaSemibold'),
        url(${Semibold}) format('woff');
        font-display: block;
    };
    @font-face {
        font-family: 'ProximaLight';
        src: local('Proxima'), local('ProximaLight'),
        url(${Light}) format('woff');
        font-display: block;
    };
`;
