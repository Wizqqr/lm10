import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/NavbarHeader.css'

export const HavbarHeader = () => {
    return (
        <div className='navbar-header'>
            <Link className='link'to='/'>Main</Link>
            <Link className='link'to='/about'>About us</Link>
            <Link className='link'to='/product'>product</Link>
        </div>
    );
}

