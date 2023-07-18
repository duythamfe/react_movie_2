import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, apiKey } from '../../config';

const SearchPage = () => {
    const navigate = useNavigate();

    const { query } = useParams();
    const { data, isLoading } = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`, fetcher);
    const movies = data ? data.results : [];
    console.log(movies);

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

                                <div className={`item-card cursor-pointer`} onClick={() => navigate(`/movie/${item.id}`)}>
                                    <div className='item-img'>
                                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                                    </div>
                                    <div className='item-label'>
                                        <h3 className='item-card-title'>{item.title}</h3>
                                    </div>
                                </div>
                            )) : null}
                        </div>
                        <div className="grid place-items-center p-2">
                            <button className='p-2 rounded-md bg-[#3CE2E8] text-white'>Load more</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default SearchPage;