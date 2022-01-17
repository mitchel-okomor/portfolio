import React from 'react';
import * as DevIcon from 'react-icons/di';
import SkillCard from './SkillCard';

function Skills() {
  const skills = [
    {
      name: 'javascript',
      icon: <DevIcon.DiJavascript />
    },
    {
      name: 'Typescript',
      icon: <DevIcon.DiTypo3 />
    },

    {
      name: 'NodeJs',
      icon: <DevIcon.DiNodejs />
    },
    {
      name: 'React',
      icon: <DevIcon.DiReact />
    },
    {
      name: 'HTML',
      icon: <DevIcon.DiHtml5 />
    },
    {
      name: 'CSS',
      icon: <DevIcon.DiCss3 />
    },
    {
      name: 'Bootstrap',
      icon: <DevIcon.DiBootstrap />
    },
    {
      name: 'Git',
      icon: <DevIcon.DiGit />
    },
    {
      name: 'Github',
      icon: <DevIcon.DiGithub />
    }
  ];

  return (
    <div className='mt-5'>
      <h2>Tools & Technologies I use</h2>
      <div className='d-flex'>
        {skills.map((item) => (
          <SkillCard prop={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
