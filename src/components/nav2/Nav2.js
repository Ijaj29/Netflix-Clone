import './Nav2.css';
import { useState, useEffect } from 'react';







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
    <nav className='nav2'
      style={{
        backgroundColor: show ? 'rgb(20,20,20)' : 'transparent',
      }}
    >
      <div className='nav_left2'>
        {/* <section> */}
        <p>Animation</p>
        <p>Crime</p>
        <p className='active'>Thriller</p>
        <p>Action</p>
        <p>Comedy</p>
        <p className='active'>Drama</p>
        <p>Latest</p>
        <p>Recommended</p>
        <p className='active'>Television</p>
        <p>Popular</p>
        <p>Adventure</p>
        <p>Legal</p>
        {/* </section> */}
      </div >
    </nav>
  );
};

export default Nav;

