import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader';
import Pin from 'components/Pin';
import axios from '../../api/unsplash';
import './index.scss';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [pins, setPins] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`photos?per_page=30&page=${page}`).then((pin) => {
      setPins((prev) => [...prev, ...pin.data]);
      setLoading(false);
      if (page <= 10) {
        setPage((prev) => prev + 1);
      }
    });
  }, [page]);

  return (
    <div className='home'>
      <div className='container'>
        {loading ? (
          <Loader text="We're adding new ideas to your home feed!" />
        ) : null}
        <div className='pins__grid'>
          {pins.map((pin, idx) => (
            <Pin key={idx} image={pin.urls.regular} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
