import React from 'react';
import { useMovie } from '../../context/movieContext';

const BackdropImage = () => {
    const { backdrop } = useMovie()
    console.log(backdrop);
    return (
        <div className='backdrop-img'>
            <img src={`https://image.tmdb.org/t/p/w500${backdrop.poster_path || ""}`} alt="" />
        </div>
    );
};

export default BackdropImage;