import React from 'react';
import { Route, Routes} from 'react-router-dom';
import anatomyBlank1 from '../webpics/IMG_4351.JPG';
import Navbar from './Navbar';
import Wishlist from './Wishlist';
import Photo from './Photo';

const Home = () => {
  return (
    <div className='home-page'>
        <div className='home-top'>
            <h1>Artisan Photos</h1>
            <Navbar />
        </div>
        <Routes>
          <Route path='/' element={
            <>
              <div className='photo-container'>
                  <img src={anatomyBlank1} alt='' className='front-image'/>
              </div>
              <div className='home-description'>
                <p>This is a small project website for my artisan keycap photos.</p>
                <p>The idea is to continue updating this page with new photos and better design.</p>
                <p>My wishlist is also here, mainly looking for bathory and sad doom.</p> 
              </div>
            </>
          } />
          <Route path='photo' element={<Photo />} />
          <Route path='wishlist' element={<Wishlist />} />
        </Routes>

    </div>


  );
};

export default Home
