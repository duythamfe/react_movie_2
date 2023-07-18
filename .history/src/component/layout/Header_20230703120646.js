import React from 'react';

const Header = () => {
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
                <form className='search-box'>
                    <input type="text" className='search-input' />
                    <button className='search-submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
            </div>
        </header>
    );
};

export default Header;