import React from 'react';

type SideProps = {
  changeDisplay: Function;
  display: string;
};

function Sidebar({ changeDisplay, display }: SideProps) {
  return (
    <div>
      <ul className='sidebar '>
        <li
          className='py-2 px-2'
          onClick={() => changeDisplay('ruby')}
          style={{
            background: display === 'ruby' ? 'rgb(230, 185, 185)' : ''
          }}
        >
          Salesruby ltd
        </li>
        <li
          onClick={() => changeDisplay('jomed')}
          className='mt-2 py-2 px-2'
          style={{
            background: display === 'jomed' ? 'rgb(230, 185, 185) ' : ''
          }}
        >
          Jomed Inc
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
