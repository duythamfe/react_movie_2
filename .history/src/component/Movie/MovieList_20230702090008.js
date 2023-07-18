import { Swiper, SwiperSlide } from 'swiper/react';
import { useMovie } from '../../context/movieContext';

import MovieCard from './MovieCard';


const MovieList = () => {

    const { movies, colection, colectionList, setCollection } = useMovie()
    console.log(colectionList);
    return (
        <div className='item-contain'>
            <div className='item-contain-header'>
                <h3 className='item-contain-title'>Collection</h3>
                <div className='item-contain-option'>
                    {/* {colectionList.map((item) => { })} */}
                    <span className='collection-btn active'>Now playing</span>
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