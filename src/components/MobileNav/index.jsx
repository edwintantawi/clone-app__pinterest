import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SmsIcon from '@material-ui/icons/Sms';
import PersonIcon from '@material-ui/icons/Person';

import './index.scss';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchBar from 'components/SearchBar';

const MobileNav = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  return (
    <>
      {activeSearch && (
        <div className='mobile__nav'>
          <SearchBar />
        </div>
      )}

      <nav className='nav'>
        <div className='nav__container'>
          <Link to='/'>
            <IconButton className='active'>
              <HomeIcon />
            </IconButton>
          </Link>
          <IconButton onClick={() => setActiveSearch((prev) => !prev)}>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <SmsIcon />
          </IconButton>
          <IconButton>
            <PersonIcon />
          </IconButton>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
