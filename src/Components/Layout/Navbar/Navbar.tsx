import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg sticky-top navbar-light bg-light top-navbar'>
      <div className='container justify-content-between'>
        <Link className='navbar-brand' to='/'>
          me
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse ' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
            <li className='nav-item '>
              <a className='nav-link' href='#mint'>
                Mint NFT
              </a>
            </li>
            <li className='nav-item mx-2'>
              <a className='nav-link' href='#collections'>
                Collection
              </a>
            </li>
            <li className='nav-item mx-2'>
              <a className='nav-link' href='#explore'>
                Explore NFT
              </a>
            </li>
            <li className='nav-item mx-2'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
          </ul>
          <div className=' mx-4'>
            <Link className='pagebtn' to='/login'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
