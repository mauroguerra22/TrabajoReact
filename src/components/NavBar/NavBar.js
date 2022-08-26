import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CardWidget from '../CardWidget/CardWidget';
import ItemListConteiner from '../ItemListConteiner/ItemListConteiner';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='Nav'>
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">Inicio</Button>
      <Button variant="outlined">Contacto</Button>
      <Button variant="outlined" href="#outlined-buttons">Youtube</Button>
      <CardWidget/>
    </Stack>
    <h3 className='sub'>Spartan Suplementos</h3>
    <ItemListConteiner
        description="Somos una empresa nacional de importacion y exportacion de suplementos deportivas a nivel Mundial,
        puedes formar parte de nostros tu decides."
    />

    </div>
  );
}

export default NavBar;

