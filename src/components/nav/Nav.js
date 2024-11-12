import './Nav.css';
import { useState, useEffect } from 'react';
import search from '../../assets/../../src/assets/srchbr.jpg';







const Nav = () => {
  const [show, setShow] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <nav
      style={{
        backgroundColor: show ? 'rgb(20,20,20)' : 'transparent',
      }}
    >
      <section>
        <div className='nav_left'>
          <img
            className='nav_logo'
            alt='logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
          />
          <div className='nav_links'>
            <a href="">Home</a>
            <a href={'tarak'}>TV Shows</a>
            <a href={'jawan'}>TV Movies</a>
            <a href='/'>Popular</a>
            <a href='/'>Recommended</a>
            {/* <a href='/'>Browse by Language</a> */}
          </div>
        </div>



        <section>
          <div className='nav_left'>


          </div>
          <img
            className='search'
            src={search}
          />





          <div className='nav_right'>
            <div className=''>
              <button className='buttonsign'>
                <b>Subscribe</b>
              </button>
            </div>
            {/* <div className=''>
              <a href=''>
                <button className='buttonsign'>
                  <b>Log Out</b>
                </button>
              </a>
            </div> */}
            {/* <img
              className='menu'
              src={menu}
            /> */}
          </div>
        </section>





      </section>
    </nav>
  );
};

export default Nav;
