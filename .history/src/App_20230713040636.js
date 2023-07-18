import './App.scss';
import 'swiper/css';
import { Routes, Route } from "react-router-dom";
import { Fragment, lazy, Suspense } from 'react';
import Header from './component/layout/Header';
// import HomePage from './component/Page/HomePage';
// import MovieDetail from './component/Page/MovieDetailPage';
// import SearchPage from './component/Page/SearchPage';

const HomePage = lazy(() => import('./component/Page/HomePage'));
const MovieDetail = lazy(() => import('./component/Page/MovieDetailPage'));
const SearchPage = lazy(() => import('./component/Page/SearchPage'));

function App() {

  return (
    <Fragment>

      <Header></Header>

      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/movie/:movie_id' element={<MovieDetail></MovieDetail>}></Route>
          <Route path='/search/:query' element={<SearchPage></SearchPage>}></Route>
        </Routes>
      </Suspense>

    </Fragment >
  );
}

export default App;