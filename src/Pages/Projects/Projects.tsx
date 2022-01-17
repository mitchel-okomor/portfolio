import React from 'react';
import Card from './Card';

const projects = [
  {
    name: 'dunvdiovn',
    github: 'git',
    url: 'http://dinvin',
    desc: 'dvneivndpov',
    image: ''
  }
];

function Projects() {
  return (
    <div className='mt-5'>
      <div>
        <h2>My projects</h2>
      </div>
      <div className='row mt-4'>
        {projects.map((item) => (
          <Card project={item} key={item.name} />
        ))}
      </div>
      <div className='mt-5'>
        {' '}
        <button className=''>View more projects</button>
      </div>
    </div>
  );
}

export default Projects;
