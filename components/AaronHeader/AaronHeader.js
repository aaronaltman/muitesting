import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function AaronHeader() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Header Title
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AaronHeader;
