import './Content.css';
import RowData2 from '../constants2/URLS2';
import Row from '../row/Row';

export default function Content() {
  return (
    <div className='content-wrapper'>

      {RowData2 && RowData2.map((el) => {
        return <Row title={el.title} movie_data={el.movie_data} />;
      })}


    </div>
  );
}


