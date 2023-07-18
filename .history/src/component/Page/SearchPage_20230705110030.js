import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, apiKey } from '../../config';

const SearchPage = () => {
    const { query } = useParams();
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`, fetcher);
    const [movies, setMovies] = useState();

    useEffect(() => {
        if (data && data.results.length > 0) {
            setMovies(data.results);
            console.log(movies);
        }
    }, [query]);

    if (movies)
        return (
            <main className='home-wrapper'>
                <div className='backdrop'>
                    <div className='backdrop-img'>
                        <img src="./bg.jpg" alt="" />
                    </div>
                    <div className='backdrop-overlay'></div>
                    <div className='detail-contain'>
                        {isLoading ?
                            (
                                <div className='fixed inset-0 grid place-items-center z-111 bg-black bg-opacity-70'>
                                    <div className='loading-icon'></div>
                                </div>
                            ) : (
                                <div className="detail-content">

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
                            )
                        }
                    </div>
                </div>
            </main>
        );
};

export default SearchPage;