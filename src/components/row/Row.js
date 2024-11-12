import { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.css';
import Card from '../card/Card';

export default function Row(props) {
  const [movies, setMovies] = useState([1, 2, 3]);

  const fetchMovies = async () => {
    const response = await axios.get(props.url);
    setMovies(response.data.results);
  };

  useEffect(() => {
    // fetchMovies();
  }, []);

  return (
    <div className='row_wrapper'>
      <h3 className='row_title10'>{props.title}</h3>
      <div className='row_card'>
        {props.movie_data && props.movie_data.map((data) => {
          return <Card img={data.img} video={data.video} />;
        })}
      </div>
    </div>
  );
}
