import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { actionTypes } from 'context/reducer';
import { useStateValue } from 'context/stateProvider';
import SearchIcon from '@material-ui/icons/Search';

import './index.scss';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [, dispatch] = useStateValue();

  // search pins
  const searchPins = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH,
      value: input,
    });
  };

  return (
    <div className='navbar__search'>
      <div className={`navbar__search__bar`}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <form onSubmit={searchPins}>
          <input
            type='text'
            placeholder='Search'
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type='submit'></button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
