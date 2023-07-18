import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        const query = document.querySelector(".search-input").value.trim();
        console.log(query);
        query && query !== "" && navigate(`/search/${query}`)
    }

    return (
        <header className='header'>
            <div className='header-inner'>
                <div className='header-logo' onClick={() => navigate('/')}>
                    <img src="/logo192.png" alt="" />
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