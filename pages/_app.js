import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import 'normalize.css/normalize.css';
import '../styles/main.scss';
import ThemeStyles from 'components/ThemeStyles/ThemeStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



const theme = createTheme({
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
    palette: {
        mode: 'dark',
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
});


export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ThemeStyles />
            <FaustProvider pageProps={pageProps}>
                <Component {...pageProps} key={router.asPath} />
            </FaustProvider>
        </ThemeProvider>
    );
}
