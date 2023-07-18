import React from 'react';

const MovieCard = ({ data }) => {
    return (
        <div className='item-card'>
            <div className='item-img'>
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
            </div>
            <div className='item-label'>
                <h3 className='item-card-title'>Name of the movie</h3>
            </div>
        </div>
    );
};

export default MovieCard;