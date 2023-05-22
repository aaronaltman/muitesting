import React from 'react';
import Box from '@mui/material/Box';

import Main from '/src/layouts/Main';
import Container from '/src/components/Container';

import { Demos, Documentation } from './components';

const IndexView = () => {
  return (
    <Main>
      <Container>
        <Demos />
      </Container>
      <Container>
        <Box
          bgcolor={'alternate.main'}
          py={{ xs: 4, sm: 8 }}
          px={{ xs: 2, sm: 8 }}
          borderRadius={2}
        >
          <Documentation />
        </Box>
      </Container>
    </Main>
  );
};

export default IndexView;
