import './App.scss';
import 'swiper/css';
import { Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import HomePage from './component/Page/HomePage';
import Header from './component/layout/Header';

function App() {

  return (
    <Fragment>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>

    </Fragment>
  );
}

export default App;
