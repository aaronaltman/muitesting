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
                    fontFamily:'Open Sans, sans-serif',
                    fontSize:'3rem',
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
            styleOverrides: {
                root: {
                    padding: 0,
                    // other Toolbar overrides...
                },
            },
        },
        // other component overrides...
    },
    // other theme settings...
});

export default theme;
