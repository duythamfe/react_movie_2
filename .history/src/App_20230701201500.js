import './App.scss';
import 'swiper/css';
import { Routes, Route } from "react-router-dom";
import Header from './component/layout/Header';
import HomePage from './component/page/HomePage';
import MoviePage from './component/page/MoviePage';
import { Fragment } from 'react';
import MovieDetail from './component/page/MovieDetail';

function App() {

  return (
    <Fragment>
      <header className='header'>
        <div className='header-inner'>
          <div className='header-logo'>
            <img src="./logo192.png" alt="" />
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default App;
