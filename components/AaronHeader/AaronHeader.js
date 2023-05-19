import React, { useContext } from 'react';

import { ColorModeContext } from '/pages/ColorModeContext';

import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import AppBar from "@mui/material/AppBar";
import {Box, Container, Typography} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

function AaronHeader(props) {
    const { toggleColorMode } = useContext(ColorModeContext);

    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                        <Box display="flex" justifyContent="space-between" width="100%">
                            <Typography variant="h6">Header Title</Typography>
                            <Box display="flex">
                                {props.menu.map((item) => (
                                    <MenuItem key={item.id}>{item.label}</MenuItem>
                                ))}
                                <IconButton onClick={toggleColorMode} color="inherit">
                                    <Brightness4Icon />
                                </IconButton>
                            </Box>
                        </Box>
                </Container>
            </AppBar>
        </>
    );
}

export default AaronHeader;
