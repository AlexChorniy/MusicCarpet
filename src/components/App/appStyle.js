import styled from 'styled-components';
import { themes } from '../../assets/themes';

export const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 5% repeat(12, 1fr) 5%;
    grid-template-rows: 35px auto;
    background-color: ${themes.white};
`;

export const NavMenu = styled.div`
    grid-column: 2/14;
    grid-row: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${themes.darkGrey};
    font-family: ProximaRegular;
`;
