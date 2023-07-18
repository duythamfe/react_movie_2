import React from 'react';
import { MovieProvider, useMovie } from '../../context/movieContext';
import MovieList from '@/component/Movie/MovieList';
import BackdropImage from '../Movie/BackdropImage';
import BackdropContent from '../Movie/BackdropContent';

const HomePage = () => {

    const { isLoading } = useMovie

    if (isLoading) {
        <div className='fixed inset-0 grid place-items-center z-111 bg-black bg-opacity-70'>
            <div className='loading-icon'></div>
        </div>
    } else {

        return (
            <main className='home-wrapper'>
                <MovieProvider>
                    <div className='backdrop'>
                        <BackdropImage></BackdropImage>
                        <div className='backdrop-overlay'></div>
                        <BackdropContent></BackdropContent>
                        <MovieList></MovieList>
                    </div>
                </MovieProvider>
            </main>
        );
    }

};

export default HomePage;