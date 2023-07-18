import React from 'react';
import { useMovie } from '../../context/movieContext';

const BackdropImage = () => {
    const { backdrop } = useMovie();

    if (backdrop) {
        return (
            <div className='backdrop-img'>
                <img src={`https://image.tmdb.org/t/p/w500${backdrop.backdrop_path}`} alt="" />
            </div>
        );
    } else {
        return (
            <div className='backdrop-img'>
                <img src="/bg.jpg" alt="" />
            </div>
        )
    }

};

export default BackdropImage;