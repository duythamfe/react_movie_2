import React, { useEffect, useState } from 'react';
// import { MovieProvider } from '../../context/movieContext';
import MovieList from '../Movie/MovieList';
import BackdropImage from '../Movie/BackdropImage';
import BackdropContent from '../Movie/BackdropContent';

import { fetcher, apiKey, collectionData } from '../../config';
import useSWR from 'swr';

const HomePage = () => {

    const [movies, setMovies] = useState();
    const [collection, setCollection] = useState();
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`, fetcher);
    // const movies = data ? data.results : [];
    useEffect(() => {
        if (data && data.results.length > 0) {
            setMovies(data.results)
        }
    }, [data])


    console.log(movies);

    return (
        <div className='home-wrapper'>
            <div className='backdrop'>
                <BackdropImage></BackdropImage>
                <div className='backdrop-overlay'></div>
                <BackdropContent></BackdropContent>
                <MovieList data={movies}></MovieList>
            </div>
        </div>
    );
};

export default HomePage;