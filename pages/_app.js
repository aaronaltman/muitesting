import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import 'normalize.css/normalize.css';
import '../styles/main.scss';
import {CssBaseline, ThemeProvider} from "@mui/material";

import theme from '/components/ThemeStyles/Theme.js';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline >
            <FaustProvider pageProps={pageProps}>
                <Component {...pageProps} key={router.asPath} />
            </FaustProvider>
            </CssBaseline>
            </ThemeProvider>
        </>
    );
}