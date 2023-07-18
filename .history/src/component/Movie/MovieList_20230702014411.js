import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
import { apiKey, fetcher } from '../../config';

import MovieCard from './MovieCard';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`, fetcher)

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
    }, [data])

    return (
        <div className='item-contain'>
            <div className='item-contain-header'>
                <h3 className='item-contain-title'>Collection</h3>
                <div className='item-contain-option'>
                    <span className='active'>Now playing</span>
                    <span>Top trending</span>
                    <span>Top rated</span>
                </div>
            </div>

            <div className='item-list'>
                <Swiper spaceBetween={20} slidesPerView={slidePerView} navigation>
                    {movies && movies.length > 0 ? movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard data={item}></MovieCard>
                        </SwiperSlide>
                    )) : null}
                </Swiper>
            </div>
        </div>
    );
};

export default MovieList;