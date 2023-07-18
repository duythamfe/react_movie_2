import { Swiper, SwiperSlide } from 'swiper/react';
import { useMovie } from '../../context/movieContext';

import MovieCard from './MovieCard';


const MovieList = () => {

    const { movies, setMovies, collectionList, collection } = useMovie();
    console.log(collectionList);
    console.log(collection);
    return (
        <div className='item-contain'>
            <div className='item-contain-header'>
                <h3 className='item-contain-title'>Collection</h3>
                <div className='item-contain-option'>
                    {collectionList.map((item) => (
                        <span
                            data-value={item.value}
                            className={`collection-btn ${item.value === collection ? "active" : null}`}
                        >
                            {item.text}
                        </span>
                    ))}
                </div>
            </div>

            <div className='item-list'>
                <Swiper spaceBetween={20} slidesPerView={5} navigation>
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