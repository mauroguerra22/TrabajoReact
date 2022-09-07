import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemList from '../ItemListConteiner/ItemList';



const ItemDetailContainer = ({ users }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Typography gutterBottom variant="h5" component="div">
          {users.title}
        </Typography>
        <CardMedia
          component="img"
          image={users.hdurl}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {users.explanation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {users.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemDetailContainer;