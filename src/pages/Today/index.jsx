import React, { useEffect, useState } from 'react';
import './index.scss';

const Today = () => {
  const [nowDate, setNowDate] = useState('');
  const getNow = () => {
    const date = new Date().toUTCString();
    const newDateFormat = date.split(' ').slice(0, 4).join(' ');
    setNowDate(newDateFormat);
  };

  useEffect(() => {
    getNow();
  }, []);
  return (
    <div className='heading'>
      <h3>{nowDate}</h3>
      <h1>Stay Inspired</h1>
    </div>
  );
};

export default Today;
