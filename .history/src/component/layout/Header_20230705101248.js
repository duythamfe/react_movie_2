import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCirclePlay, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        const query = document.querySelector(".search-input").value.trim();
        console.log(query);
    }

    return (
        <header className='header'>
            <div className='header-inner'>
                <div className='header-logo'>
                    <img src="./logo192.png" alt="" />
                </div>
                <nav className='main-nav'>
                    <span className='main-nav-link active'>Movie</span>
                    <span className='main-nav-link'>TV Show</span>
                    <span className='main-nav-link'>Cartoon</span>
                </nav>
                <form className='search-box' onSubmit={handleSearch} >
                    <input type="text" className='search-input' />
                    <button className='search-submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
            </div>
        </header>
    );
};

export default Header;