import React from 'react';
import { Container, Grid, Box, Typography, Paper } from '@mui/material';
import Image from 'next/image';

const AaronHeroNew = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>
                        <Box sx={{
                            marginTop:'85px',
                            paddingTop:'85px',
                            paddingBottom:'75px',
                        }}
                        >
                            <Image
                                src="https://bpmuitesting.wpengine.com/wp-content/uploads/2023/05/acm-blueprint/media/379/Screen-Shot-2022-03-09-at-10.57.17.jpeg" // Path to your image
                                alt="Hero"
                                layout="responsive"
                                width={1259}
                                height={890}
                            />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        paddingTop:'85px',
                        paddingBottom:'40px',
                    }}
                    >
                        <Typography variant="h2">Hero Section 2</Typography>
                        <Typography variant="body1">Content for hero section 2...</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AaronHeroNew;
