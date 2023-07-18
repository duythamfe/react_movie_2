import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, apiKey } from '../../config';

const MovieDetail = () => {
    const { movie_id } = useParams();
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`, fetcher);
    const detail = data ? data : [];
    const genres = data ? detail.genres : [];
    console.log(detail);

    if (detail)

        return (
            <main className='home-wrapper'>
                <div className='backdrop'>
                    <div className='backdrop-img'>
                        <img src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`} alt="" />
                    </div>
                    <div className='backdrop-overlay'></div>
                    <div className='detail-contain'>
                        <div className="detail-content">
                            <div className="detail-content-header">
                                <h2 className='detail-title'>{detail.title} | <span className='text-gray-200 text-[16px]'>{detail.release_date}</span></h2>
                                <span className='text-[16px] text-white'><FontAwesomeIcon icon={faStar} /> {backdrop.vote_average}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
};

function MovieCredit() {
    const { movie_id } = useParams();
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${apiKey}`, fetcher);
    const cast = data ? data.cast : [];
    console.log(cast);
    return (
        <div>
            <h3 className="text-white text-[20px] font-bold">Cast</h3>
            <div className="flex gap-3 flex-wrap">
                {cast.slice(0, 5).map((item) => {

                    return (
                        <div className='flex flex-col gap-3' key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" className='w-[150px] aspect-square object-cover object-center' />
                            <span>{item.name}</span>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default MovieDetail;