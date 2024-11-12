import { useState, useEffect } from 'react';
import axios from 'axios';
import './Row2.css';
import Card2 from '../card2/Card2';

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
      {/* <h3 className='row_title'>{props.title}</h3> */}
      <div className='row_card2'>
        {props.movie_data && props.movie_data.map((data) => {
          return <Card2 img={data.img} video={data.video} />;
        })}
      </div>
    </div>
  );
}
