import React from 'react';

const MovieCard = ({ data }) => {

    return (
        <div className={`item-card ${data.id === backdrop.id ? "active" : null}`} onClick={() => setBackdrop(data)}>
            <div className='item-img'>
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
            </div>
            <div className='item-label'>
                <h3 className='item-card-title'>{data.title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;