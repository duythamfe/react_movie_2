import { createContext, useContext, useState, useEffect } from "react";
import useSWR from 'swr';
import { apiKey, fetcher } from '../config';
import axios from "axios";

const MovieContext = createContext();

const collectionList = [
    {
        id: 1, value: "now_playing", text: "Now playing"
    },
    {
        id: 2, value: "top_rated", text: "Top rated"
    },
    {
        id: 3, value: "popular", text: "Top trending"
    },
]

function MovieProvider(props) {
    const [collection, setCollection] = useState(() => collectionList[0].value);
    const [movies, setMovies] = useState([]);
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${collection}?api_key=${apiKey}`, fetcher)
    const [backdrop, setBackdrop] = useState();

    useEffect(() => {
        const timer = setTimeout(async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${collection}?api_key=${apiKey}`);
            if (response.data.results) {
                setMovies(response.data.results);
            }
        })
        return clearTimeout(timer)
    }, 2000)

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
    }, [data])

    useEffect(() => {
        if (data && data.results && movies && movies.length > 0) {
            setBackdrop(movies[0]);
        }
    }, [movies]);

    function changeCollection(e) {
        setCollection(e.target.dataset.value);
    }

    const value = { collection, setCollection, backdrop, setBackdrop, movies, setMovies, collectionList, changeCollection };

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