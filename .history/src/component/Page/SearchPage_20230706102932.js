import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, apiKey } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const SearchPage = () => {
    const navigate = useNavigate();

    const { query } = useParams();
    const [page, setPage] = useState(1)
    const { data, isLoading } = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`, fetcher);
    const movies = data ? data.results : [];
    if (data) {
        console.log(data.page);
        console.log(data.total_pages);
    }

    return (
        <main className='home-wrapper'>
            <div className='backdrop-img'>
                <img src="/bg.jpg" alt="" />
            </div>
            <div className='backdrop-overlay'></div>
            <div className='detail-contain'>
                {isLoading ? (
                    <div className='fixed inset-0 grid place-items-center z-111 bg-black bg-opacity-70'>
                        <div className='loading-icon'></div>
                    </div>
                ) : (
                    <div className='detail-content'>
                        <h3 className='text-[#3CE2E8] font-bold text-[16px] mb-2'>Kết quả tìm kiếm: </h3>
                        <div className='grid grid-cols-5 gap-5'>
                            {movies && movies.length > 0 ? movies.map((item) => (

                                <div key={item.id} className={`item-card cursor-pointer`} onClick={() => navigate(`/movie/${item.id}`)}>
                                    <div className='item-img'>
                                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                                    </div>
                                    <div className='item-label'>
                                        <h3 className='item-card-title'>{item.title}</h3>
                                    </div>
                                </div>
                            )) : null}
                        </div>
                        <div className="flex gap-4 justify-center items-center my-8">
                            <span
                                className='px-2 py-1 bg-white rounded-md cursor-pointer text-[#3CE2E8]'
                                onClick={() => {
                                    if (page > 1) {
                                        setPage(page - 1)
                                    }
                                }
                                }
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </span>
                            {Array(data.total_pages).fill(0).map((item, index) => (
                                <span
                                    onClick={() => setPage(index + 1)}
                                    className={`text-white rounded-md px-3 py-1 cursor-pointer ${index === (page - 1) ? "bg-[#3CE2E8]" : "bg-white bg-opacity-40"}`}
                                >
                                    {index + 1}
                                </span>
                            ))}
                            <span
                                className='px-2 py-1 bg-white rounded-md cursor-pointer text-[#3CE2E8]'
                                onClick={() => {
                                    if (page < data.total_pages) {
                                        setPage(page + 1)
                                    }
                                }
                                }
                            >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default SearchPage;