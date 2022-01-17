import React from 'react';

type SideProps = {
  changeDisplay: Function;
};

function Sidebar({ changeDisplay }: SideProps) {
  return (
    <div>
      <ul className='sidebar '>
        <li className='' onClick={() => changeDisplay('ruby')}>
          Salesruby ltd
        </li>
        <li onClick={() => changeDisplay('jomed')} className='mt-2'>
          Jomed Inc
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
