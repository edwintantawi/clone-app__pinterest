import React from 'react';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import './index.scss';
const Loader = ({ text, action }) => {
  return (
    <div className='loader'>
      <h2>{text}</h2>
      {action ? <a href='/'>Back</a> : <AutorenewIcon />}
    </div>
  );
};

export default Loader;

// today "Loading today's picks..."
// home "We're adding new ideas to your home feed!"
