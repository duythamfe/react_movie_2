import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { useMovie } from '../../context/movieContext';

import MovieCard from './MovieCard';


const MovieList = () => {

    const { movies, setMovies, collectionList, collection, changeCollection } = useMovie();
    console.log(data);

    return (
        <div className='item-contain'>
            <div className='item-contain-header'>
                <h3 className='item-contain-title'>Collection</h3>
                <div className='item-contain-option'>
                    {/* {collectionList.map((item) => (
                        <span
                            data-value={item.value}
                            className={`collection-btn ${item.value === collection ? "active" : null}`}
                            onClick={changeCollection}
                        >
                            {item.text}
                        </span>
                    ))} */}
                </div>
            </div>

            <div className='item-list'>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                >
                    {data && data.length > 0 ? data.map((item) => (
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