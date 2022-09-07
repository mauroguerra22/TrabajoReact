/* import *  as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CardComponent from './CardComponent';

const [isLoading, setIsLoading] = useEffect(false);

useEfecct(() => {
    setIsLoading(true);
}); 

{isLoading ? <Spinner/> : <CardComponent data={data} />};

setTimeout(() => {
    setIsLoading(false);
}, 2000);

const Spinner = () =>  {
  return (
    <Box sx={{ display: 'flex', marginTop: 7 }}>
      <CircularProgress />
    </Box>
  );
}

export default Spinner;

 */