import React from 'react';

function ProgressBar() {
  window.onscroll = function () {
    handleScrolling();
  };

  const handleScrolling = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    let elem = document.getElementById('myBar')!;
    elem.style.width = scrolled + '%';
  };

  return (
    <div className='progress-container'>
      <div className='progress-bar' id='myBar'></div>
    </div>
  );
}

export default ProgressBar;
