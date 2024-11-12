import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Nav2 from './components/nav2/Nav2';
import Content from './components/content/Content';
import Header2 from './components/header2/Header2';
import Content2 from './components/content2/Content2';
import Nav3 from './components/nav3/Nav3';
import Content3 from './components/content3/Content3';
import Content4 from './components/content4/Content4';

import axios from 'axios';
import { ContextProvider } from './context/ContextProvider';


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '', // ! Add your API key here
};

const App = () => {
  return (
    <div>
      <ContextProvider>


        {/* Nav Component */}
        <Nav />

        {/* Header background image with buttons and title */}
        <Header />

        {/* Nav For extra options */}
        <Nav2 />

        {/* Content with only 2 rows */}
        <Content />

        {/* ===Header2 with different sizes=== */}
        <Header2 />

        {/* Content2  */}
        <Content2 />

        {/* Nav3 For Buttons */}
        <Nav3 />

        {/* Content 3 With Diffferent Sizes */}
        <Content3 />

        {/*Last Content4 with all data */}
        <Content4 />


      </ContextProvider>
    </div>
  );

};

export default App;