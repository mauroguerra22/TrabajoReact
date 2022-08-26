import React from 'react'
import './Header.css';
import img from './spartan.jpg';

const Header = (props) => {

    return (
    <div className='Header'>
        <img src={img} alt='logo' />
        <h1>{props.tittle}</h1>
        <h2>{props.subtittle}</h2>
    </div>
  )
}

export default Header