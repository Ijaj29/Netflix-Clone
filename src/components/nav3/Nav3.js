import './Nav3.css';
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
      <div className='buttonn'>
        {/* <section>  */}
        {/* <p>Thriller</p> */}
        {/* <p>Animation</p> */}
        {/* <p>Crime</p> */}
        <button className='buttonagain1'>Action</button>
        <button className='buttonagain'>Drama</button>
        <button className='buttonagain1'>Romantic</button>
        <button className='buttonagain'>Comedy</button>
        {/* <button>Latest</button> */}
        <button className='buttonagain'>Recommended</button>
        <button className='buttonagain1'>Popular</button>
        <button className='buttonagain'>Adventure</button>
        {/* <button className='buttonagain1'>Legal</button> */}
        {/* <button>Television</button> */}
        {/* </section> */}
      </div >
    </nav>
  );
};

export default Nav;

