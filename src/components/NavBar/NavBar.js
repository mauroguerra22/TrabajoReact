import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './NavBar.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='Navigation'>
			<ul className='List-ul'>
				<Link to='/' className='Link'>
					Home
				</Link>
				<Link to='/about' className='Link'>
					About
				</Link>
				<Link to='/contact' className='Link'>
					Contact
				</Link>
			</ul>
		</nav>
	);
};

export default NavBar;














/*  const NavBar = () => {
  return (
    <div >
    <Stack direction="row"  spacing={2}>
      <Button className='but'  variant="outlined" >Inicio</Button>
      <Button className='but'  variant="outlined" >Contacto</Button>
      <Button className='but'  variant="outlined"  href="#outlined-buttons">Youtube</Button>
      <Header/>
      <CardWidget/>
    </Stack>
    <h3 className='sub'>Spartan Suplementos</h3>
    <ItemListConteiner
        description="Somos una empresa nacional de importacion y exportacion de suplementos deportivas a nivel Mundial,
        puedes formar parte de nostros tu decides."
    />

    </div>
  );
} */



