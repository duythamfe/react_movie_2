import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { useMovie } from '../../context/movieContext';

const BackdropContent = () => {
    const { backdrop } = useMovie();
    const [genreName, setGenreName] = useState([]);
    const [dataGenre, setDataGenre] = useState(null);

    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/genre/movie/list?api_key=04a3534c85b97d2bfd72d750a1764af1'
        )
            .then((response) => response.json())
            .then((data) => {
                setDataGenre(data);
            })
            .catch((error) => {
                console.error('Đã xảy ra lỗi:', error);
            });
    }, []);

    useEffect(() => {
        if (backdrop && backdrop.genre_ids && dataGenre) {
            const genreList = backdrop.genre_ids;
            const names = genreList.map((genreId) => {
                const genre = dataGenre.genres.find((genre) => genre.id === genreId);
                return genre ? genre.name : '';
            });
            setGenreName(names);
        }
    }, [backdrop, dataGenre]);

    if (backdrop)

        return (
            <div className="backdrop-content">
                <div className="backdrop-content-img">
                    <img src={`https://image.tmdb.org/t/p/w500${backdrop.poster_path}`} alt="" />
                </div>
                <div className="backdrop-content-info">
                    <div className="backdrop-content-info_top">
                        <h3 className="backdrop-title">{backdrop.title}</h3>
                        <div className="backdrop-option">
                            <button className="btn-lg pink">
                                Favorite <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <button className="btn-lg blue">
                                Watch Now <FontAwesomeIcon icon={faCirclePlay} />
                            </button>
                        </div>
                    </div>

                    <div className="backdrop-content-info_tags">
                        {genreName.length > 0
                            ? genreName.map((genre, index) => <span key={index}>{genre}</span>)
                            : null}
                    </div>

                    <p className="backdrop-content-info_desc">{backdrop.overview}</p>
                    <div className="flex gap-3 items-center">
                        <span className="backdrop-content-info_year">
                            {new Date(backdrop.release_date).getFullYear()}
                        </span>
                        <span className="backdrop-content-info_point">
                            <FontAwesomeIcon icon={faStar} /> {backdrop.vote_average}
                        </span>
                    </div>
                </div>
            </div>
        );
};

export default BackdropContent;
