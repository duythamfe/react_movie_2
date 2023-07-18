import './App.scss';
import 'swiper/css';
import { Routes, Route } from "react-router-dom";
import { Fragment, lazy, Suspense } from 'react';
import HomePage from './component/Page/HomePage';
import Header from './component/layout/Header';
import MovieDetail from './component/Page/MovieDetailPage';
import SearchPage from './component/Page/SearchPage';

const HomePage = lazy(() => import {'./component/Page/HomePage' });

function App() {

  return (
    <Fragment>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/movie/:movie_id' element={<MovieDetail></MovieDetail>}></Route>
        <Route path='/search/:query' element={<SearchPage></SearchPage>}></Route>
      </Routes>

    </Fragment>
  );
}

export default App;
