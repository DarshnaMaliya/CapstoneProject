import React from 'react';
import {Typography } from '@mui/material';

const Error = () => {
    return (
        
            <Typography align='center' color={'red'} font-weight={'bold'} fontSize={50}>
            oops, 404 error.... page not found
            <br></br>
            please add correct url
            </Typography>
            
    );
}

export default Error;