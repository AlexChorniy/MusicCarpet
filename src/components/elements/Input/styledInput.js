import styled from "styled-components";

import { themes } from '../../../assets/themes';

export const InputLabel = styled.label.attrs(({ ref }) => ({
    ref,
}))`
    min-width: 250px;
    height: 15px;
    line-height: 15px;
    color: ${themes.grey};
    border: 1px solid ${themes.grey};
    padding-left: 5px;
    padding-right: 5px;
    font-size: 10px;
    cursor: pointer;
    display: ${({ display }) => display || 'block'};
    :hover {
        border-color: ${themes.orange};
    };
`;

export const TextInput = styled.input.attrs(() => ({
    autocomplete: "off",
}))`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	position: absolute;
	z-index: -1;
`;