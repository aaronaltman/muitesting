import React from 'react';

import Page from '/src/components/Page';

import {About} from "../src/views";
import Topbar from "../src/layouts/Fixed/components/Topbar";

function aboutPage (){
    return(
        <Page>
            <Topbar />
        <About />
        </Page>
    )
}

export default aboutPage;
