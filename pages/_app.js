import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import 'normalize.css/normalize.css';
import '../styles/main.scss';
import ThemeStyles from 'components/ThemeStyles/ThemeStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: '"Open Sans","sans-serif", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        // ...and so on for each typography variant
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
