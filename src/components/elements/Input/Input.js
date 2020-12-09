'use strict';
import React, { forwardRef } from 'react';

import {
    InputLabel,
    TextInput,
} from './styledInput';

const Input = forwardRef(({
    text,
    onChangeHandler,
    width,
    isVisible,
    onClickInputHdr,
}, ref) => (
        <InputLabel
            width={width} display={isVisible ? 'block' : 'none'}
            onClick={onClickInputHdr}
            ref={ref}
        >
            {text}
            <TextInput
                type="text"
                onChange={onChangeHandler}
            />
        </InputLabel>
    ));

export default Input;
