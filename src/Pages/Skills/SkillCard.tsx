import React from 'react';

type SkillProp = {
  prop: { name: string; icon: any };
};

function SkillCard({ prop }: SkillProp) {
  const { name, icon } = prop;
  return (
    <div className='text-center p-3'>
      {icon}
      <p>{name}</p>
    </div>
  );
}

export default SkillCard;
