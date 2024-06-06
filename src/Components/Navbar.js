import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
        <div className='navbar-links-container'>
            <Link to='/'>Home</Link>
            <Link to='/photo'>Gallery</Link>
            <Link to='/wishlist'>Wishlist</Link>
        </div>
        
    </nav>
  );
};

export default Navbar
