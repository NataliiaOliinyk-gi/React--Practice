/** @jsxImportSource @emotion/react */
import TextField from '@mui/material/TextField';
// import { css } from '@emotion/react';

import { fieldStyle } from './styles';

// const fieldStyle = css`
// border: 1px solid grey;
// color: grey;
// font-size: 18px;
// `

const TextInput = (props) => {
    return (
        <TextField css={fieldStyle} {...props} />


        // <TextField
        //   required
        //   id="outlined-required"
        //   label="Required"
        //   defaultValue="Hello World"
        // />
    )
};

export default TextInput;