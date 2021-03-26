import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsIcon from '@material-ui/icons/Sms';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import './index.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [screenSize, setScreenSize] = useState();
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');

  const expandParent = useRef('expandParent');
  const expandToggler = useRef('expandToggler');

  const checkPath = useCallback(() => {
    if (location === '/' || location === '/#/') {
      setLocation('Home');
    } else if (location === '/#/today') {
      setLocation('Today');
    }
  }, [location]);

  const closeExpand = () => {
    checkPath();
    const target = expandParent.current;
    const targetToggler = expandToggler.current;
    target.classList.toggle('active');
    targetToggler.classList.toggle('active');
    setLocation(window.location.pathname);
  };

  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);

  useEffect(() => {
    if (location === '/' || location === '/app/') {
      setTitle('Home');
    } else if (location === '/app/today') {
      setTitle('Today');
    }
  }, [location]);

  useEffect(() => {
    checkPath();
    setScreenSize(window.innerWidth);
    window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth);
    });
  }, [checkPath]);

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
              <span
                className='expand_toggler'
                onClick={closeExpand}
                ref={expandToggler}
              >
                {title} <ExpandMoreIcon />
              </span>
              <div
                className='navigation__expand'
                ref={expandParent}
                onClick={closeExpand}
              >
                <NavLink to='/' exact>
                  Home <CheckIcon />
                </NavLink>
                <NavLink to='/today'>
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
};

export default Navbar;
