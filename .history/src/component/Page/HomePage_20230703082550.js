import React from 'react';
// import { MovieProvider } from '../../context/movieContext';
import MovieList from '../Movie/MovieList';
import BackdropImage from '../Movie/BackdropImage';
import BackdropContent from '../Movie/BackdropContent';

const HomePage = () => {

    return (
        <div className='home-wrapper'>
            <div className='backdrop'>
                <BackdropImage></BackdropImage>
                <div className='backdrop-overlay'></div>
                <BackdropContent></BackdropContent>
                <MovieList></MovieList>
            </div>
        </div>
    );
};

export default HomePage;