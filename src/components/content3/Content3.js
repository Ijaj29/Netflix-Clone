import './Content3.css';
import RowData3 from '../constants3/URLS3';
import Row2 from '../row2/Row2';

export default function Content() {
  return (
    <div className='content-wrapper'>

      {RowData3 && RowData3.map((el) => {
        return <Row2 title={el.title} movie_data={el.movie_data} />;
      })}


    </div>
  );
}


