import React from 'react';
import DarkMode from '../../DarkMode';
import ProgressBar from '../../ProgressBar';

function Navbar() {
  return (
    <div className='sticky-top nav-container'>
      <nav className='navbar navbar-expand-lg  navbar-light bg-light top-navbar'>
        <div className='container justify-content-between'>
          <div className='d-flex justify-content-between w-100'>
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
            <div className='darkmode-ms mx-4'>
              <DarkMode />
            </div>
          </div>

          <div className='collapse navbar-collapse ' id='navbarText'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
              <li className='nav-item mx-2'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item mx-2'>
                <a className='nav-link' href='#experience'>
                  Experience
                </a>
              </li>
              <li className='nav-item mx-2'>
                <a className='nav-link' href='#projects'>
                  Projects
                </a>
              </li>
              <li className='nav-item mx-2'>
                <a className='nav-link' href='#about'>
                  Contact
                </a>
              </li>
              <li className='nav-item mx-2'>
                <a className='nav-link' href='#resume'>
                  Resume
                </a>
              </li>
            </ul>
            <div className='darkmode-lg mx-4'>
              <DarkMode />
            </div>
          </div>
        </div>
      </nav>{' '}
      <ProgressBar />
    </div>
  );
}

export default Navbar;
