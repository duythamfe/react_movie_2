import React from 'react';
import { useMovie } from '../../context/movieContext';

const BackdropImage = () => {
    const { backdrop } = useMovie()
    console.log(backdrop.backdrop_path);
    return (
        <div className='backdrop-img'>
            <img src="./h-banner.jpg" alt="" />
        </div>
    );
};

export default BackdropImage;