import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
// import { useMovie } from '../../context/movieContext';

const BackdropContent = () => {

    return (
        <div className="backdrop-content">
            <div className="backdrop-content-img">
                {/* <img src={`https://image.tmdb.org/t/p/w500${backdrop.poster_path}`} alt="" /> */}
            </div>
            <div className="backdrop-content-info">
                <div className="backdrop-content-info_top">
                    {/* <h3 className="backdrop-title">{backdrop.title}</h3> */}
                    <div className="backdrop-option">
                        <button className="btn-lg pink">
                            {/* Favorite <FontAwesomeIcon icon={faHeart} /> */}
                        </button>
                        <button className="btn-lg blue">
                            {/* Watch Now <FontAwesomeIcon icon={faCirclePlay} /> */}
                        </button>
                    </div>
                </div>

                <div className="backdrop-content-info_tags">
                    {/* {genreName.length > 0
                        ? genreName.map((genre, index) => <span key={index}>{genre}</span>)
                        : null} */}
                </div>

                {/* <p className="backdrop-content-info_desc">{backdrop.overview}</p> */}
                <div className="flex gap-3 items-center">
                    <span className="backdrop-content-info_year">
                        {/* {new Date(backdrop.release_date).getFullYear()} */}
                    </span>
                    <span className="backdrop-content-info_point">
                        {/* <FontAwesomeIcon icon={faStar} /> {backdrop.vote_average} */}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BackdropContent;
