import { createContext, useContext, useState, useEffect } from "react";
import useSWR from 'swr';
import { apiKey, fetcher } from '../config';

const MovieContext = createContext();

const collectionList = [
    {
        id: 1, value: "now_playing", text: "Now playing"
    },
    {
        id: 2, value: "top_rated", text: "Top rated"
    },
    {
        id: 3, value: "top_tranding", text: "Now playing"
    },
]

function MovieProvider(props) {
    const [collection, setCollection] = useState(() => collectionList[0].value);
    console.log(collection);
    const [movies, setMovies] = useState([]);
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${collection}?api_key=${apiKey}`, fetcher)
    cons[backdrop, setBackdrop] = useta

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
    }, [data])

    const value = { collectionList, movies, setMovies };

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