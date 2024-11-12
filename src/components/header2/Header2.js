import './Header2.css';
// import jawan from '../../assets/jawan.mp4'
import bigboss from '../../../src/assets/bigg boss.mp4'



function Header() {
  // url for latest movies - /latest
  return (
    <header className='header2'>
      <div className='header_inner_shadow'></div>
      <div className='header_content2'>




        <h4 className='header_desc'>
          <em className='dunki'></em>
        </h4>


        <div className='header_buttons'>
          <a href={bigboss}>
            <button type='submit' className='header_button play_button'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z'
                  fill='currentColor'
                ></path>
              </svg>
              Play
            </button>
          </a>


          <a href={bigboss}>
            <button className='header_button more_info_button'>
              More Info
            </button>
          </a>
        </div>
      </div>
    </header >
  );
}

export default Header;
