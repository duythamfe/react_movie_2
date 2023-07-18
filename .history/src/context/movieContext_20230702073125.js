import { createContext, useContext, useState, useEffect } from "react";

import useSWR from 'swr';
import { apiKey, fetcher } from '../../config';

const MovieContext = createContext();

const collectionList = [
    {
        id: 1, dataValue: "now_playing", text: "Now playing"
    },
    {
        id: 2, dataValue: "top_rated", text: "Top rated"
    },
    {
        id: 3, dataValue: "top_tranding", text: "Now playing"
    },
]

function MovieProvider(props) {

    const [movies, setMovies] = useState([]);
    const { data } = useSWR(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`, fetcher)

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
    }, [data])

    const value = { movies, setMovies };

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