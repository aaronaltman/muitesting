import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import AaronHeader from '../components/AaronHeader/AaronHeader.js';

import ColorModeContextProvider from './ColorModeContext';


function App() {
    const [mode] = React.useState('light');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
                typography: {
                    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
                    fontSize: 14,
                    h1: {
                        fontWeight: 700,
                        fontSize:'1.8rem',
                    },
                    h2: {
                        fontWeight: 700,
                    },
                    h3: {
                        fontWeight: 600,
                    },
                    h4: {
                        fontWeight: 600,
                    },
                    h5: {
                        fontWeight: 500,
                    },
                    h6: {
                        fontWeight: 500,
                        fontSize:'2.5rem',
                    },
                    subtitle1: {
                        fontSize: 16,
                    },
                    subtitle2: {
                        fontSize: 14,
                    },
                    body1: {
                        fontSize: 16,
                    },
                    body2: {
                        fontSize: 14,
                    },
                    button: {
                        textTransform: 'none',
                    },
                    caption: {
                        fontSize: 12,
                    },
                    overline: {
                        fontSize: 10,
                    },
                },
                components: {
                    MuiMenuItem: {
                        styleOverrides: {
                            root: {
                                color: '#333',
                                '&:hover': {
                                    backgroundColor: '#f5f5f5',
                                },
                                '&.Mui-selected': {
                                    backgroundColor: '#ddd',
                                },
                                '&.Mui-selected:hover': {
                                    backgroundColor: '#ccc',
                                },
                            },
                        },
                    },
                    MuiToolbar: {
                        styleOverrides: {
                            root: {
                                padding: 0,
                            },
                        },
                    },
                },
            }),
        [mode],
    );

    const menuItems = [
        { id: 1, label: 'Home' },
        { id: 2, label: 'About' },
        // other menu items...
    ];

    return (
        <ColorModeContextProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AaronHeader menu={menuItems} />
            </ThemeProvider>
        </ColorModeContextProvider>
    );
}

export default App;
