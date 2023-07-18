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
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/movie' element={<MoviePage></MoviePage>}></Route>
        <Route path='/movie/:movie_id' element={<MovieDetail></MovieDetail>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
