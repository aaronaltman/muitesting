import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000066',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#0969da',
            contrastText: '#ffffff',
        },
        error: {
            main: '#ff0000',
        },
        // other palette settings...
    },
    typography: {
        fontFamily: 'Open Sans, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
            // other h1 settings...
        },
        h6:{
            fontSize:'1.9rem',
            fontWeight:'bold',

        },
        body1:{
            fontSize:'1.9rem',
            color:'#333',
        },
        body2:{
            fontSize:'2.2rem',
            fontWeight:'bold',

        },
        MenuItem:{
            color:'white',
        },
        // other typography settings...
    },
    shape: {
        borderRadius: 8,
        // other shape settings...
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    // your Typography overrides...
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    // your MenuItem overrides...
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 24,
                    textTransform: 'none',
                    // other Button overrides...
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                    // other contained Button overrides...
                },
            },
        },
        MuiToolbar: {
            defaultProps: {
                padding: false,
            },
            styleOverrides: {
                root: {
                    paddingLeft: 0,
                    paddingRight:0,
                    // other Toolbar overrides...
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                '@global': {
                    '.css-bfldy9': {
                        paddingLeft: 0,
                        paddingRight: 0,
                    },
                },
            },
        },
    },
    // other theme settings...
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '.css-bfldy9': {
                    paddingLeft: 0,
                    paddingRight: 0,
                },
            },
        },
    },
});

export default theme;
