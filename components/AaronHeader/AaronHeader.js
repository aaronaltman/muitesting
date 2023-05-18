import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function AaronHeader(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Header Title
                </Typography>
                {props.menu}
            </Toolbar>
        </AppBar>
    );
}

export default AaronHeader;
