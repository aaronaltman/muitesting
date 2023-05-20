import React, { useContext, useState, useEffect } from 'react';
import { useScrollPosition } from 'react-use-scroll-position';

import { ColorModeContext } from '/pages/ColorModeContext';

import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import AppBar from "@mui/material/AppBar";
import {Box, Container, Typography, Toolbar, } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

function AaronHeader(props) {
    const { toggleColorMode } = useContext(ColorModeContext);
    const [headerSize, setHeaderSize] = useState('40px');
    const scrollPosition = useScrollPosition();

    useEffect(() => {
        if (scrollPosition.y > 50) {
            setHeaderSize('15px');
        } else {
            setHeaderSize('30px');
        }
    }, [scrollPosition]);

    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Box display="flex"
                             justifyContent="space-between"
                             width="100%"
                             sx={{
                                 pt: headerSize,
                                 pb: headerSize,
                                 alignItems:'center',
                             }}
                        >
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
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default AaronHeader;
