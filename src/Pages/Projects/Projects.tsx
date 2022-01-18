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
      <div className='d-flex mt-4 flex-wrap'>
        {projects.map((item) => (
          <Card project={item} key={item.name} />
        ))}
      </div>
      <div className='mt-5 text-center'>
        <button className='page-btn btn rounded px-3 py-2'>
          View more projects
        </button>
      </div>
    </div>
  );
}

export default Projects;
