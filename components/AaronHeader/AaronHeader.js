import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

function AaronHeader(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Header Title
                </Typography>
                {props.menu.map((item) => (
                    <MenuItem key={item.id}>
                        {item.label}
                    </MenuItem>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default AaronHeader;
