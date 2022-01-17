import React from 'react';
import About from '../About/About';
import Introduction from '../Introduction/Introduction';

function Home() {
  return (
    <div className='container'>
      <Introduction />
      <About />
    </div>
  );
}

export default Home;
