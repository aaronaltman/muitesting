import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const ImageComponent = ({ images, title }) => {
  return (
      <Grid container spacing={2} sx={{ height: 1 }}>
        {images.map((item, i) => (
            <Grid key={i} item xs={i === 0 ? 12 : 6}>
              <Box
                  sx={{
                    display: 'flex',
                    height: 1,
                    '& .next-image': {
                      width: 1,
                      height: 1,
                      objectFit: 'cover',
                      borderRadius: 2,
                    },
                  }}
              >
                <Image src={item} alt={title} layout="fill" objectFit="cover" loading="lazy" />
              </Box>
            </Grid>
        ))}
      </Grid>
  );
};

ImageComponent.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageComponent;
