import React from 'react';
import Skills from '../Skills/Skills';
import Introduction from '../Introduction/Introduction';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <div className='container mb-5'>
      <Introduction />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
