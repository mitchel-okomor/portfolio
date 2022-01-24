/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import * as FaIcon from 'react-icons/fa';

const DarkMode = () => {
  const [theme, setTheme] = useState('');

  const setDark = () => {
    localStorage.setItem('theme', 'dark');

    document.documentElement.setAttribute('data-theme', 'dark');
  };

  const setLight = () => {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  };

  const storedTheme: string = localStorage.getItem('theme')!;

  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const defaultDark =
    storedTheme === 'dark' || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = () => {
    if (storedTheme !== 'dark') {
      setDark();
      setTheme('dark');
    } else {
      setLight();
      setTheme('light');
    }
  };

  useEffect(() => {
    setTheme(storedTheme);
  }, []);

  return (
    <div className='toggle-theme-wrapper'>
      <span style={{ cursor: 'pointer' }} onClick={toggleTheme}>
        <FaIcon.FaLightbulb />
      </span>
      {/* <label className='toggle-theme' htmlFor='checkbox'>
        <input
          type='checkbox'
          id='checkbox'
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className='slider round'></div>
      </label>
      <span>🌒</span> */}
    </div>
  );
};

export default DarkMode;
