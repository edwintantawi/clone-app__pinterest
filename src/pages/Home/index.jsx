import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader';
import Pin from 'components/Pin';
import axios from '../../api/unsplash';
import './index.scss';
import { useStateValue } from 'context/stateProvider';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [pins, setPins] = useState([]);
  const [pageRandom, setPageRandom] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);
  const [notFound, setNotFound] = useState(false);
  const [{ search }] = useStateValue();

  // get Random pins
  useEffect(() => {
    setNotFound(false);
    setLoading(true);
    axios.get(`photos?per_page=30&page=${pageRandom}`).then((pin) => {
      setPins((prev) => [...prev, ...pin.data]);
      if (pageRandom <= 3) {
        setPageRandom((prev) => prev + 1);
      } else {
        setLoading(false);
      }
    });
  }, [pageRandom]);

  useEffect(() => {
    setNotFound(false);
    setLoading(true);
    setPins([]);
    if (search !== '') {
      axios
        .get(`search/photos?query=${search}&per_page=30&page=${pageSearch}`)
        .then((pin) => {
          if (pin.data.total === 0) {
            setNotFound(true);
          }
          setPins((prev) => [...prev, ...pin.data.results]);
          const page = pin.data.total_pages < 11 ? pin.data.total_pages : 11;
          if (pageSearch <= page) {
            setPageSearch((prev) => prev + 1);
          } else {
            setLoading(false);
          }
        })
        .catch(() => {
          setLoading(false);
          setNotFound(true);
        });
    } else {
      setPageRandom(1);
    }
  }, [search, pageSearch, setPageRandom]);

  return (
    <div className='home'>
      <div className='container'>
        {loading ? (
          <Loader text="We're adding new ideas to your home feed!" />
        ) : null}
        {notFound ? <Loader text='Ooops Not Found...' action /> : null}
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
