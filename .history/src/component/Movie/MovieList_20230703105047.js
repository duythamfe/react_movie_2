import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { A11y, Pagination, Navigation } from "swiper";
import { useMovie } from '../../context/movieContext';

import MovieCard from './MovieCard';


const MovieList = () => {

    const { movies, setMovies, collectionData, collection, setCollection } = useMovie();
    const swiper = useSwiper();

    return (
        <div className='item-contain'>
            <div className='item-contain-header'>
                <h3 className='item-contain-title'>Collection</h3>
                <div className='item-contain-option'>
                    {collectionData.map((item) => (
                        <span
                            data-value={item.value}
                            className={`collection-btn ${item.value === collection ? "active" : null}`}
                            onClick={() => setCollection(item.value)}
                            key={item.id}
                        >
                            {item.text}
                        </span>
                    ))}
                </div>
            </div>

            <div className='item-list relative'>
                <Swiper
                    modules={[Ally, Pagination, navigator]}
                    spaceBetween={20}
                    slidesPerView={5}
                    loop={true}
                >
                    {movies && movies.length > 0 ? movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard data={item}></MovieCard>
                        </SwiperSlide>
                    )) : null}
                </Swiper>
                <div className='slide-nav'>
                    <span className='slide-nav-btn' onClick={() => swiper.slidePrev()}><FontAwesomeIcon icon={faArrowLeft} /></span>
                </div>
            </div>
        </div>
    );
};

export default MovieList;