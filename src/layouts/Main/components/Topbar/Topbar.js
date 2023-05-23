import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";


const Topbar = ({ onSidebarOpen, }) => {
    const theme = useTheme();
    //const { mode } = theme.palette;
    return (
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
                title="Headless WP Designs"
                width={{ xs: 100, md: 300, lg:350 }}
            >
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: 'medium',
                        fontSize:'24px',
                    }}
                    gutterBottom
                    color={'text.primary'}
                    align={'center'}
                >
                        HEADLESS WORDPRESS
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
    );
};

export default Topbar;
