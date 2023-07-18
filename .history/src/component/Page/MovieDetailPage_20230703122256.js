import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, apiKey } from '../../config';

const MovieDetail = () => {
    const { movie_id } = useParams();
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`, fetcher);
    const detail = data ? data : [];
    const genres = data ? detail.genres : [];

    return (
        <div className="page-wrapper">
            <div className="my-10 w-full relative ">
                <div className="w-full h-[600px] rounded-lg overflow-hidden">
                    <img src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`} alt="" className='object-cover object-center w-full h-full blur-md' />
                </div>
                <div className='absolute left-5 right-5 bottom-5 rounded-md bg-black bg-opacity-30 p-3 flex gap-5'>
                    <img className='w-60 h-90 object-cover object-center flex-shrink-0' src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} alt="" />
                    <div className="flex flex-col flex-1 gap-y-3 flex-wrap items-center">
                        <h4 className="text-white font-bold text-[20px] w-full">{detail.title}</h4>
                        <p className='w-full'>{detail.overview}</p>
                        <ul className='w-full flex flex-wrap gap-3 '>
                            {genres.length > 0 ? genres.map((genre, index) => (
                                <li className='px-3 py-1 border border-white rounded-md' key={index}>{genre.name}</li>
                            )) : null}
                        </ul>
                    </div>
                </div>
            </div>
            <MovieCredit></MovieCredit>
        </div>
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