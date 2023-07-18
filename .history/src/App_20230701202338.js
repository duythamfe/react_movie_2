import './App.scss';
import 'swiper/css';
import { Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import MovieDetail from './component/page/MovieDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  return (
    <Fragment>
      <header className='header'>
        <div className='header-inner'>
          <div className='header-logo'>
            <img src="./logo192.png" alt="" />
          </div>
          <nav className='main-nav'>
            <span className='main-nav-link active'>Movie</span>
            <span className='main-nav-link'>TV Show</span>
            <span className='main-nav-link'>Cartoon</span>
          </nav>
          <form className='search-box'>
            <input type="text" className='search-input' />
            <button className='search-submit'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
          </form>
        </div>
      </header>
    </Fragment>
  );
}

export default App;
