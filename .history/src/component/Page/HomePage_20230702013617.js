import React from 'react';
import MovieList from '../Movie/MovieList';

const HomePage = () => {
    return (
        <div className='home-wrapper'>
            <div className='backdrop'>
                <div className='backdrop-img'>
                    <img src="./h-banner.jpg" alt="" />
                </div>
                <div className='backdrop-overlay'></div>
                <div className='backdrop-content'>
                    <div className='backdrop-content-img'>
                        <img src="./h-banner.jpg" alt="" />
                    </div>
                    <div className='backdrop-content-info'>
                        <div className='backdrop-content-info_top'>
                            <h3 className='backdrop-title'>Name of the movie</h3>
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
                <MovieList></MovieList>
            </div>
        </div>
    );
};

export default HomePage;