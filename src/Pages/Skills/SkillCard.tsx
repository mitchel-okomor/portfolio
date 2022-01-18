import React from 'react';

type SkillProp = {
  prop: { name: string; icon: any };
};

function SkillCard({ prop }: SkillProp) {
  const { name, icon } = prop;
  return (
    <div
      className='text-center m-3 p-2 skill-card rounded'
      style={{ cursor: 'pointer' }}
    >
      {icon}
      <p>{name}</p>
    </div>
  );
}

export default SkillCard;
