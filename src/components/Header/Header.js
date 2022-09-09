import React from 'react'
import './Header.css';
import img from './spartan.jpg';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (

    <div className='Header'>
    <Link to='/'>
        <img src={img} alt='logo' width={400}/>
        <h1>{props.tittle}</h1>
        <h2>{props.subtittle}</h2>
    </Link>
    </div>
  )
}

export default Header