import * as React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

const HomeIcon = () => {
  return (
    <SvgIcon >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const CardWidget = () => {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <HomeIcon />
    </Box>
  );
}

export default CardWidget