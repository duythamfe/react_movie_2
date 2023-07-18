import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, apiKey } from '../../config';

const SearchPage = () => {
    const { query } = useParams();
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`, fetcher);
    const movies = data ? data.results : [];
    console.log(movies);

    return (
        <main className='home-wrapper'>
            <div className='backdrop'>
                <div className='backdrop-img'>
                    <img src="./bg.jpg" alt="" />
                </div>
                <div className='backdrop-overlay'></div>
                <div className='detail-contain'>
                    {/* {isLoading ?
                        (
                            <div className='fixed inset-0 grid place-items-center z-111 bg-black bg-opacity-70'>
                                <div className='loading-icon'></div>
                            </div>
                        ) : (
                            <div className="detail-content">

                            </div>
                        )
                    } */}
                </div>
            </div>
        </main>
    );
};

export default SearchPage;