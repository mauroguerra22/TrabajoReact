import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';




const ItemDetailContainer = ()  => {
  const [data, setData] = useState ({});

  useEffect(() => {
    axios('https://api.nasa.gov/planetary/apod?api_key=yd5oC0qrC72u5p6WJIKrdApvvdVOrdSd1lzdugLQ')
    .then(res => setData(res.data))
  }, []);


  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={data.hdurl}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data.tittle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {data.explanation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {data.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemDetailContainer;