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
            setMovies(data.results)
        }
    }, [query]);

    return (
        <div className='text-white font-bold'>
            aaaaaaaaaaaaaaaaaa
        </div>
    );
};

export default SearchPage;