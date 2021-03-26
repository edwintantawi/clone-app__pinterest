import React from 'react';
import './index.scss';
const Pin = ({ image }) => {
  return (
    <div className='pin'>
      <img src={image} className='pin__content'></img>
    </div>
  );
};

export default Pin;
