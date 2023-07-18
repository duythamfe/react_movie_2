import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { useMovie } from '../../context/movieContext';

const BackdropContent = () => {
    const { backdrop } = useMovie();
    console.log(backdrop);
    return (
        <div className='backdrop-content'>
            <div className='backdrop-content-img'>
                <img src={`https://image.tmdb.org/t/p/w500${backdrop.poster_path}`} alt="" />
            </div>
            <div className='backdrop-content-info'>
                <div className='backdrop-content-info_top'>
                    <h3 className='backdrop-title'>{backdrop.title}</h3>
                    <div className='backdrop-option'>
                        <button className='btn-lg pink'>Favorite <FontAwesomeIcon icon={faHeart} /></button>
                        <button className='btn-lg blue'>Watch Now <FontAwesomeIcon icon={faCirclePlay} /></button>
                    </div>
                </div>

                <div className='backdrop-content-info_tags'>
                    <span>Action</span>
                    <span>Action</span>
                    <span>Action</span>
                </div>

                <p className='backdrop-content-info_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio ratione aut, unde eveniet impedit quaerat iure laborum! Et sequi a expedita maxime, provident reprehenderit aliquam odio rem non voluptate?</p>
                <div className='flex gap-3 items-center'>
                    <span className='backdrop-content-info_year'>2023</span>
                    <span className='backdrop-content-info_point'><FontAwesomeIcon icon={faStar} /> 7.3</span>
                </div>

            </div>
        </div>
    );
};

export default BackdropContent;