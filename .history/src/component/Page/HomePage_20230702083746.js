import React from 'react';
import { MovieProvider, useMovie } from '../../context/movieContext';
import MovieList from '../Movie/MovieList';
import BackdropImage from '../Movie/BackdropImage';
import BackdropContent from '../Movie/BackdropContent';

const HomePage = () => {

    return (
        <div className='home-wrapper'>
            <MovieProvider>
                <div className='backdrop'>
                    <BackdropImage></BackdropImage>
                    <div className='backdrop-overlay'></div>
                    <BackdropContent></BackdropContent>
                    <MovieList></MovieList>
                </div>
            </MovieProvider>
        </div>
    );
};

export default HomePage;