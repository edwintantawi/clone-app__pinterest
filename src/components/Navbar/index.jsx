import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsIcon from '@material-ui/icons/Sms';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.scss';

function Navbar() {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    setScreenSize(window.innerWidth);
    window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth);
    });
  });

  return (
    <nav className='navbar'>
      <div className='navbar__wrapper'>
        {/* NAVBAR-LEFT */}
        <div className='navbar__left'>
          <a href='/'>
            <IconButton>
              <PinterestIcon style={{ color: '#e60023', fontSize: 28 }} />
            </IconButton>
          </a>
          <div className='navigation'>
            <a
              href='#'
              className={`navigation ${screenSize >= 848 ? 'active' : null}`}
            >
              Home {screenSize >= 848 ? null : <ExpandMoreIcon />}
            </a>
            {screenSize >= 848 ? (
              <a href='#' className='navigation'>
                Today
              </a>
            ) : null}
          </div>
        </div>
        {/* NAVBAR-SEARCH */}
        <div className='navbar__search'>
          <div className='navbar__search__bar'>
            <IconButton>
              <SearchIcon />
            </IconButton>
            {screenSize >= 648 ? (
              <form>
                <input type='text' placeholder='Search' />
                <button type='submit'></button>
              </form>
            ) : null}
          </div>
        </div>

        {/* NAVBAR-RIGHT */}
        <div className='navbar__right'>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <SmsIcon />
          </IconButton>
          <IconButton>
            <Avatar style={{ width: 24, height: 24 }} />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
