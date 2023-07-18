import './App.scss';
import 'swiper/css';
// import { Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCirclePlay, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import MovieCard from './component/Movie/MovieCard';

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
            <button className='search-submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </form>
        </div>
      </header>

      <main className='main'>
        <div className='home-wrapper'>
          <div className='backdrop'>
            <div className='backdrop-img'>
              <img src="./h-banner.jpg" alt="" />
            </div>
            <div className='backdrop-overlay'></div>
            <div className='backdrop-content'>
              <div className='backdrop-content-img'>
                <img src="./h-banner.jpg" alt="" />
              </div>
              <div className='backdrop-content-info'>
                <div className='backdrop-content-info_top'>
                  <h3 className='backdrop-title'>Name of the movie</h3>
                  <div className='backdrop-option'>
                    <button className='btn-lg pink'>Favorite <FontAwesomeIcon icon={faHeart} /></button>
                    <button className='btn-lg blue'>Watch Now <FontAwesomeIcon icon={faCirclePlay} /></button>
                  </div>
                </div>

                <div className='backdrop-content-info_tags'>
                  <span>Action</span>
                  <span>Action</span>
                  <span>Action</span>
                </div>

                <p className='backdrop-content-info_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio ratione aut, unde eveniet impedit quaerat iure laborum! Et sequi a expedita maxime, provident reprehenderit aliquam odio rem non voluptate?</p>
                <div className='flex gap-3 items-center'>
                  <span className='backdrop-content-info_year'>2023</span>
                  <span className='backdrop-content-info_point'><FontAwesomeIcon icon={faStar} /> 7.3</span>
                </div>

              </div>
            </div>
            <div className='item-contain'>
              <div className='item-contain-header'>
                <h3 className='item-contain-title'>Collection</h3>
                <div className='item-contain-option'>
                  <span className='active'>Now playing</span>
                  <span>Top trending</span>
                  <span>Top rated</span>
                </div>
              </div>

              <div className='item-list'>
                <MovieCard></MovieCard>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
