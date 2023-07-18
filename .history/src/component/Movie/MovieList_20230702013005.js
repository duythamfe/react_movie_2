import React from 'react';

const MovieList = () => {
    return (
        <div className='item-contain'>
            <div className='item-contain-header'>
                <h3 className='item-contain-title'>Collection</h3>
                <div className='item-contain-option'>
                    <span className='active'>Now playing</span>
                    <span>Top trending</span>
                    <span>Top rated</span>
                </div>
            </div>

            <div className='item-list'>
                <MovieCard></MovieCard>
            </div>
        </div>
    );
};

export default MovieList;