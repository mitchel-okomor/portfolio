import React from 'react';
import * as FaIcon from 'react-icons/fa';

function Introduction() {
  return (
    <div className='intro row mt-5'>
      <div className='col-6 col-ms-12'>
        <p>Hi, </p>
        <h2>I'm Mitchel Okomor</h2>
        <h4>FullStack Developer</h4>
        <p>
          I'm a software engineer, based in Nigeria. <br /> I enjoy buiding
          things for the web.
        </p>
        <div>
          <button>Hire Me</button>
          <button>View My Works</button>
        </div>
        <div>
          <FaIcon.FaGithub />
          <FaIcon.FaLinkedin />
          <FaIcon.FaTwitter />
        </div>
      </div>
      <div className='col-6 col-ms-12'>right</div>
    </div>
  );
}

export default Introduction;
