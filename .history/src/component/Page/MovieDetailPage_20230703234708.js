import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, apiKey } from '../../config';

const MovieDetail = () => {
    const { movie_id } = useParams();
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`, fetcher);
    const detail = data ? data : [];
    const genres = data ? detail.genres : [];
    const producComp = data ? detail.production_companies : [];

    if (detail)

        return (
            <main className='home-wrapper'>
                <div className='backdrop'>
                    <div className='backdrop-img'>
                        <img src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`} alt="" />
                    </div>
                    <div className='backdrop-overlay'></div>
                    <div className='detail-contain'>
                        {isLoading &&
                            <div className='fixed inset-0 grid place-items-center z-111'>
                                <div className='loading-icon'></div>
                            </div>
                        }
                        <div className="detail-content">
                            <div className="detail-content-header">
                                <h2 className='detail-title'>{detail.title} | <span className='text-gray-200 text-[16px]'>{detail.release_date}</span></h2>
                                <span className='text-[16px] text-white'><FontAwesomeIcon icon={faStar} /> {detail.vote_average}</span>
                            </div>

                            <div className='detail-content-body mb-8'>
                                <div className='detail-img'>
                                    <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} alt="" />
                                </div>
                                <div className='detail-overview'>
                                    <h3 className='text-[#3CE2E8] font-bold text-[16px] mb-2'>Overview</h3>
                                    <p>{detail.overview}</p>
                                    <h3 className='text-[#3CE2E8] font-bold text-[16px] mb-2'>Genre</h3>
                                    <div className='detail-tags'>
                                        {genres.length > 0 ? genres.map((genre, index) => (
                                            <span className='px-3 py-1 border border-white rounded-md' key={index}>{genre.name}</span>
                                        )) : null}
                                    </div>
                                    <h3 className='text-[#3CE2E8] font-bold text-[16px] mb-2'>Product Companies</h3>
                                    <div className='flex gap-2 flex-wrap'>
                                        {producComp.length > 0 ? producComp.map((item) => (
                                            <div key={item.id} className='w-[calc(10%_-_8px)] aspect-square rounded-sm overflow-hidden bg-white p-2'>
                                                <img className='w-full h-full object-contain object-center' src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} alt="" />
                                            </div>
                                        )) : null}
                                    </div>
                                </div>
                            </div>
                            <MovieCredit></MovieCredit>

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


    return (
        <div className='p-3 rounded-lg bg-black bg-opacity-30'>
            <h3 className="text-[#3CE2E8] text-[16px] font-bold mb-2">Cast</h3>
            <div className="flex gap-3 flex-wrap">
                {cast.slice(0, 5).map((item) => {

                    return (
                        <div className='flex flex-col gap-3 items-center' key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" className='rounded-md w-[150px] aspect-square object-cover object-center' />
                            <span className='text-white'>{item.name}</span>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

function VideoPlay() {
    const { movie_id } = useParams();
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${apiKey}`, fetcher);
    // const video = data ? data.cast : [];
    console.log(data);

    return (
        <div></div>
    )
}

export default MovieDetail;