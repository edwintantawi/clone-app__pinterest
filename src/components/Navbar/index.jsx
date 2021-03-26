import React, { useEffect, useState, useRef } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsIcon from '@material-ui/icons/Sms';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import './index.scss';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [screenSize, setScreenSize] = useState();

  const expandParent = useRef('expandParent');

  useEffect(() => {
    setScreenSize(window.innerWidth);
    window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth);
    });
  }, []);

  const closeExpand = () => {
    const target = expandParent.current;
    target.classList.toggle('active');
    console.info(target.classList);
  };

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
          {screenSize >= 848 ? (
            <div className='navigation'>
              <NavLink
                to='/'
                //${screenSize >= 848 ? 'active' : null}
                activeClassName='active'
                exact
              >
                Home {screenSize >= 848 ? null : <ExpandMoreIcon />}
              </NavLink>

              <NavLink to='/today' activeClassName='active'>
                Today
              </NavLink>
            </div>
          ) : (
            <div className='navigation'>
              <a href='#' className='active' onClick={closeExpand}>
                Home <ExpandMoreIcon />
              </a>
              <div className='navigation__expand' ref={expandParent}>
                <NavLink to='/' exact onClick={closeExpand}>
                  Home <CheckIcon />
                </NavLink>
                <NavLink to='/today' onClick={closeExpand}>
                  Today <CheckIcon />
                </NavLink>
              </div>
            </div>
          )}
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
