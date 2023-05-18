import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function AaronFooter(props) {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Box>
                            <Typography variant="h6">
                                Footer Column 1
                            </Typography>
                            {props.menu.map((item) => (
                                <MenuItem key={item.id}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Box>
                        <Box>
                            <Typography variant="h6">
                                Footer Column 2
                            </Typography>
                            {props.menu.map((item) => (
                                <MenuItem key={item.id}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Box>
                        <Box>
                            <Typography variant="h6">
                                Footer Column 3
                            </Typography>
                            {props.menu.map((item) => (
                                <MenuItem key={item.id}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AaronFooter;
