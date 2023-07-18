import './App.scss';
import 'swiper/css';
// import { Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCirclePlay, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import HomePage from './component/Page/HomePage';

function App() {

  return (
    <Fragment>
      <header></header>
      <HomePage></HomePage>
    </Fragment>
  );
}

export default App;
