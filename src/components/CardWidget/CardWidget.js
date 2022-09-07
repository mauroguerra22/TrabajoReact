import * as React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

const HomeIcon = () => {
  return (
    <SvgIcon className='icon'>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const CardWidget = () => {
  return (
    <Box className='icon'
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <HomeIcon className='icon'   />
    </Box>
  );
}

export default CardWidget