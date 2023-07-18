import { createContext, useContext, useState, useEffect, useRef } from "react";
import useSWR from 'swr';
import { apiKey, fetcher, collectionData } from '../config';
import axios from "axios";

const MovieContext = createContext();

function MovieProvider(props) {
    const [collection, setCollection] = useState(() => collectionList[0].value);
    const [movies, setMovies] = useState([]);
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/${collection}?api_key=${apiKey}`, fetcher)
    const [backdrop, setBackdrop] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchMovies.current();
        }, 1);

        return () => clearTimeout(timer)
    }, [movies])


    function changeCollection(e) {
        setCollection(e.target.dataset.value);
    }

    const value = { collection, setCollection, backdrop, setBackdrop, movies, setMovies, collectionList, changeCollection, isLoading };

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