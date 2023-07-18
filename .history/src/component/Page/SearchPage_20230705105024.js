import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, apiKey } from '../../config';

const SearchPage = () => {
    const { query } = useParams();
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=04a3534c85b97d2bfd72d750a1764af1&query=tom%20and%20jerry`, fetcher);
    console.log(data);

    return (
        <div className='text-white font-bold'>
            aaaaaaaaaaaaaaaaaa
        </div>
    );
};

export default SearchPage;