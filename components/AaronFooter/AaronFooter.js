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
    column: {
        flex: '1',
    },
});

function AaronFooter(props) {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar className={classes.toolbar}>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Box className={classes.column}>
                            <Typography variant="h6">
                                Footer Column 1
                            </Typography>
                            {props.menu.map((item) => (
                                <MenuItem key={item.id}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Box>
                        <Box className={classes.column}>
                            <Typography variant="h6">
                                Footer Column 2
                            </Typography>
                            {props.menu.map((item) => (
                                <MenuItem key={item.id}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Box>
                        <Box className={classes.column}>
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
