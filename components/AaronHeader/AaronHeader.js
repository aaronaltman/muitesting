import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/material';

const useStyles = makeStyles({
    toolbar: {
        padding: 0,
    },
});

function AaronHeader(props) {
    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar className={classes.toolbar}>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Typography variant="h6">
                            Header Title
                        </Typography>
                        <Box display="flex">
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

export default AaronHeader;
