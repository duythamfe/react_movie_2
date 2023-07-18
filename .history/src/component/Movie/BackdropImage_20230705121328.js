import React from 'react';
import { useMovie } from '../../context/movieContext';

const BackdropImage = () => {
    const { backdrop } = useMovie();

    if (backdrop) {
        return (
            <div className='backdrop-img'>
                <img src="../bg.jpg" alt="" />
            </div>
        );
    } else {
        return (
            <div className='backdrop-img'>
                <img src="./bg.jpg" alt="" />
            </div>
        )
    }

};

export default BackdropImage;