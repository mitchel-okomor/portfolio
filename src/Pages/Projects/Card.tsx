import React from 'react';
import * as DevIcons from 'react-icons/di';
import * as FaIcons from 'react-icons/fa';

type CardProps = {
  project: {
    name: string;
    github: string;
    url: string;
    desc: string;
    image: string;
  };
};
function Card({ project }: CardProps) {
  const { name, github, url, desc, image } = project;
  return (
    <div style={{ backgroundImage: image }} className='project-card'>
      <div className='project-card-header'>
        <ul>
          <li>
            <a href={github} target='_blank' rel='noreferrer'>
              <DevIcons.DiGithub style={{ fontSize: '1.7rem' }} />
            </a>
          </li>
          <li className='ml-3'>
            <a href={url} target='_blank' rel='noreferrer'>
              <FaIcons.FaExternalLinkAlt style={{ fontSize: '1.2rem' }} />
            </a>
          </li>
        </ul>
      </div>
      <div className='project-card-body'>
        <p className='text-center'>{name}</p>
      </div>
      <div className='project-card-footer text-center'>{desc}</div>
    </div>
  );
}

export default Card;
