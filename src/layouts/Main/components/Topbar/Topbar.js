import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
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
            title="theFront"
            width={{ xs: 100, md: 120 }}
        >
          <Box
              component={'img'}
              src={
                mode === 'light' && !colorInvert
                    ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                    : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
              }
              height={1}
              width={1}
          />
        </Box>
        <Box
            display={'flex'}
            width={{ xs: 100, md: 120 }}
        >
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
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
        <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
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

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  cx: PropTypes.func,
  navClasses: PropTypes.string,
  menuItems: PropTypes.array,
  colorInvert: PropTypes.bool,
};

export default Topbar;
