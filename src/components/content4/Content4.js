import './Content4.css';
import RowData4 from '../constants4/URLS4';
import Row from '../row/Row';

export default function Content() {
  return (
    <div className='content-wrapper4'>

      {RowData4 && RowData4.map((el) => {
        return <Row title={el.title} movie_data={el.movie_data} />;
      })}


    </div>
  );
}


