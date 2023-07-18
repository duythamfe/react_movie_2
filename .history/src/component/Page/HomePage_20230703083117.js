import React from 'react';
// import { MovieProvider } from '../../context/movieContext';
import MovieList from '../Movie/MovieList';
import BackdropImage from '../Movie/BackdropImage';
import BackdropContent from '../Movie/BackdropContent';

import { fetcher, apiKey, collectionData } from '../../config';

const HomePage = () => {

    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`, fetcher);
    console.log(data);

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