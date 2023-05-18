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
        fontFamily: 'Roboto, sans-serif',
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
                    padding: 0, // Remove padding from the toolbar
                },
            },
        },
        // other component overrides...
    },
    // other theme settings...
});

export default theme;
