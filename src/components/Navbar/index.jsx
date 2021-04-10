import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import PinterestIcon from '@material-ui/icons/Pinterest';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsIcon from '@material-ui/icons/Sms';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.scss';
import { NavLink } from 'react-router-dom';
import SearchBar from 'components/SearchBar';

const Navbar = () => {
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
            <NavLink to='/' activeClassName='active' exact>
              Home
            </NavLink>

            <NavLink to='/today' activeClassName='active'>
              Today
            </NavLink>
          </div>
        </div>
        {/* NAVBAR-SEARCH */}
        <SearchBar />
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
};

export default Navbar;
