import React from 'react';
import * as DevIcon from 'react-icons/di';
import SkillCard from './SkillCard';

function Skills() {
  const skills = [
    {
      name: 'javascript',
      icon: <DevIcon.DiJavascript style={{ fontSize: '3rem' }} />
    },
    {
      name: 'Typescript',
      icon: <DevIcon.DiTypo3 style={{ fontSize: '3rem' }} />
    },

    {
      name: 'NodeJs',
      icon: <DevIcon.DiNodejs style={{ fontSize: '3rem' }} />
    },
    {
      name: 'React',
      icon: <DevIcon.DiReact style={{ fontSize: '3rem' }} />
    },
    {
      name: 'HTML',
      icon: <DevIcon.DiHtml5 style={{ fontSize: '3rem' }} />
    },
    {
      name: 'CSS',
      icon: <DevIcon.DiCss3 style={{ fontSize: '3rem' }} />
    },
    {
      name: 'Bootstrap',
      icon: <DevIcon.DiBootstrap style={{ fontSize: '3rem' }} />
    },
    {
      name: 'Git',
      icon: <DevIcon.DiGit style={{ fontSize: '3rem' }} />
    },
    {
      name: 'Github',
      icon: <DevIcon.DiGithub style={{ fontSize: '3rem' }} />
    }
  ];

  return (
    <div className='mt-5'>
      <h2>Languages, Framworks & Tools I use</h2>
      <div className='row'>
        <div className='d-flex skill-cards flex-wrap col-sm-10'>
          {skills.map((item) => (
            <SkillCard prop={item} key={item.name} />
          ))}
        </div>
        <div className='col-sm-2'></div>
      </div>
    </div>
  );
}

export default Skills;
