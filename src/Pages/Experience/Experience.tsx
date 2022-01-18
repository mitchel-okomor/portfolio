import React, { useState, FC } from 'react';
import Sidebar from './Sidebar';

function Experience() {
  const [display, setdisplay] = useState('ruby');

  const changeDisplay = (val: string) => {
    setdisplay(val);
  };

  const ComponentToDisplay: FC = () => {
    switch (display) {
      case 'ruby':
        return (
          <div>
            <h4>
              FullStack Engineer{' '}
              <span className='text-danger'> @ Salesruby ltd</span>
            </h4>
            <h5>February 2021 - Present</h5>
            <ul>
              <li>
                Work with team members to set up application Frontend and
                Backend with necessary tools for development.
              </li>
              <li>Design application database using Sequelize ORM.</li>
              <li>
                Implement APIs to be consumed by the frontend, including
                authentication and authorization.
              </li>
              <li>Write automated tests for API endpoints.</li>
              <li>
                Setup frontend application with React and Redux and other tools.
              </li>
              <li>
                Translate UI Figma designs to HTML and CSS Codes (Material UI
                and Bootstrap required sometimes).
              </li>
              <li>Consume backend APIs in the frontend using ReactJS.</li>
            </ul>
          </div>
        );
      case 'jomed':
        return (
          <div>
            <h4>
              Frontend Engineer
              <span className='text-danger'> @ Jomed Inc</span>
            </h4>
            <h5>Nov 2019 – Dec 2020</h5>
            <ul className='mt-3'>
              <li>
                Translated UI figma designs to HTML and CSS Codes using ReactJS.
              </li>
              <li>Consumed backend APIs using axios and fetch API.</li>
              <li>Implemented frontend user authentication.</li>
              <li>
                Implemented frontend application logic with JavaScript (React)
                SKILLS  HTML
              </li>
            </ul>
          </div>
        );
    }

    return <div></div>;
  };

  return (
    <div className='mt-5 experience'>
      <div>
        <h2>Work Experience</h2>
      </div>
      <div className='row mt-4 '>
        <div className='col-sm-4'>
          <Sidebar changeDisplay={changeDisplay} display={display} />
        </div>
        <div className='col-sm-8'>
          <ComponentToDisplay />
        </div>
      </div>
    </div>
  );
}

export default Experience;
