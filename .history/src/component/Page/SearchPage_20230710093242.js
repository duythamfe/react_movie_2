import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../../config';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const SearchPage = () => {
    const navigate = useNavigate();
    const { query } = useParams();
    const [page, setPage] = useState(1)
    const { data, isLoading } = useSWR(tmdbAPI.searchApi(query, page), fetcher);

    const handlePageClick = (event) => {
        setPage(event.selected + 1);
    };

    useEffect(() => {
        setPage(1)
    }, [query])

    const movies = data ? data.results : [];

    // const endOffset = itemOffset + itemsPerPage;


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
                                        <img src={tmdbAPI.imgPath(item.poster_path)} alt="" />
                                    </div>
                                    <div className='item-label'>
                                        <h3 className='item-card-title'>{item.title}</h3>
                                    </div>
                                </div>
                            )) : null}
                        </div>
                        <div className="flex gap-4 justify-center items-center my-8">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                pageCount={data.total_pages}
                                previousLabel="< previous"
                                className='react-paginate'
                            />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default SearchPage;