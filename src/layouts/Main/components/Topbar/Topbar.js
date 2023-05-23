import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";

import Page from '/src/components/Page';

const Topbar = ({ onSidebarOpen, }) => {
    const theme = useTheme();
    //const { mode } = theme.palette;
    return (
        <Page>
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={1}
        >
            <Box
                display={'flex'}
                component="a"
                href="/"
                title="theFront"
                width={{ xs: 100, md: 120 }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1 ,
                        fontSize:'50px',
                        color:'#333',
                        alignItems:'center',
                }}
                >
                    Headless WP
                </Typography>
            </Box>
            <Box
                display={'flex'}
                alignItems={'center'}
                sx={{ display: { xs: 'none', md: 'flex' } }}
            >
                <Box marginLeft={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        component="a"
                        target="blank"
                        href="https://mui.com/store/items/the-front-landing-page/"
                        size="large"
                    >
                        Buy now
                    </Button>
                </Box>
            </Box>
            <Box
                display={'flex'}
                alignItems={'center'}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <Button
                    onClick={() => onSidebarOpen()}
                    aria-label="Menu"
                    variant={'outlined'}
                    sx={{
                        borderRadius: 2,
                        minWidth: 'auto',
                        padding: 1,
                        borderColor: alpha(theme.palette.divider, 0.2),
                    }}
                >
                    <MenuIcon />
                </Button>
            </Box>
        </Box>
        </Page>
    );
};

export default Topbar;
