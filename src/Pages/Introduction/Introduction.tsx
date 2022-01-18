import React from 'react';
import * as FaIcon from 'react-icons/fa';
import avatar from '../../Assets/images/Mitchavatar.png';

function Introduction() {
  return (
    <div className='intro row mt-5'>
      <div className='col-sm-4 avatar2'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='col-sm-8'>
        <h3>Hello, </h3>
        <h2 className='name-intro'>I'm Mitchel Okomor</h2>
        <h4 className='my-3'>Frontend Developer</h4>
        <p className='mt-3'>
          I'm a frontend developer based in Lagos, Nigeria. <br /> I enjoy
          buiding things for the web.
        </p>
        <div>
          <a
            href='https://github.com/mitchel-okomor'
            target='_blank'
            rel='noreferrer'
          >
            <FaIcon.FaGithub className='mx-2' style={{ fontSize: '1.5rem' }} />
          </a>
          <a
            href='https://www.linkedin.com/in/mitchel-okomor-46917711b/'
            target='_blank'
            rel='noreferrer'
          >
            <FaIcon.FaLinkedin
              className='mx-2'
              style={{ fontSize: '1.5rem' }}
            />
          </a>
          <a
            href='https://twitter.com/developerMitch'
            target='_blank'
            rel='noreferrer'
          >
            <FaIcon.FaTwitter className='mx-2' style={{ fontSize: '1.5rem' }} />
          </a>
        </div>
        <div className='mt-3'>
          <button className='px-4 py-2 page-btn rounded'>Hire Me</button>
          <button className='m-4 px-4 py-2 page-btn2 rounded'>
            View My Works
          </button>
        </div>
        <div className='mt-5'>
          <div className='row'>
            <div className='col-sm-6'>
              <h2 className=''>What I Do</h2>
            </div>
            <div className='col-sm-6 '></div>
          </div>
          <div className='row mt-3'>
            <div className='col-sm-6 mt-3'>
              <div className='row'>
                <div className='col-2'>
                  <FaIcon.FaDesktop style={{ fontSize: '2.5rem' }} />
                </div>
                <div className='col-10'>
                  <h5 className=''>Frontend Development</h5>
                  <p>
                    I build scalable SPA with HTML, CSS, Bootstrap and ReactJS.
                    I use UI Libries sush as Materia UI to speed up development
                    time with their out of the box react Ui components
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 mt-3'>
              <div className='row'>
                <div className='col-2'>
                  <FaIcon.FaServer style={{ fontSize: '2.5rem' }} />
                </div>
                <div className='col-10'>
                  <h5>Backend Development</h5>
                  <p>
                    I Build server side application (REST APIs) with NodeJS,
                    Express, MongoDB and MySQl. I use Sequelize ORM to speedup
                    the buildng database schema and also query the data. I use
                    Jest testing library for automated tests and Postman for API
                    documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-4 avatar'>
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  );
}

export default Introduction;
