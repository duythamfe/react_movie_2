import { createContext, useContext, useState, useEffect, useRef } from "react";
// import useSWR from 'swr';
import { apiKey, fetcher, collectionData } from '../config';
import axios from "axios";

const MovieContext = createContext();

function MovieProvider(props) {
    const [collection, setCollection] = useState();
    const [movies, setMovies] = useState([]);
    const [backdrop, setBackdrop] = useState();
    // const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`, fetcher)
    const loadMovieData = useRef({});

    loadMovieData.current = async () => {
        // setLoading(true);
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
            if (response.data.results) {
                setMovies(response.data.results);
                setBackdrop(movies[0])
                // setLoading(false);
            }
            // setMovieData(response.data.results ? response.data.results : [])

        } catch (error) {
            // setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            loadMovieData.current();
        }, 1000);

        return () => clearTimeout(timer)
    }, [])

    console.log(backdrop);

    function changeCollection(e) {
        setCollection(e.target.dataset.value);
    }

    const value = { collection, setCollection, backdrop, setBackdrop, movies, setMovies, changeCollection };

    return (
        <MovieContext.Provider value={value} {...props}></MovieContext.Provider>
    )
}

function useMovie() {
    const context = useContext(MovieContext);
    if (typeof context === "undefined") {
        throw new Error("useGallery mush be used within a AuthProvider tags");
    }
    return context;
}

export { MovieProvider, useMovie };