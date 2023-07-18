import './App.scss';
import 'swiper/css';
// import { Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCirclePlay, faHeart } from '@fortawesome/free-solid-svg-icons';

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
            <button className='search-submit text-red-700'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
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
                    <button className='btn-lg blue'>Favorite <FontAwesomeIcon icon={faCirclePlay} /></button>
                    <button className='btn-lg blue'>Watch Now <FontAwesomeIcon icon={faCirclePlay} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
