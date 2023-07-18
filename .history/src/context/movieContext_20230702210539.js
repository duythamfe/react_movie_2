import { createContext, useContext, useState, useEffect, useRef } from "react";
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
    const [collection, setCollection] = useState("now_playing");
    const [movies, setMovies] = useState([]);
    // const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${collection}?api_key=${apiKey}`, fetcher)
    const [backdrop, setBackdrop] = useState();
    const fetchMovies = useRef({});

    loadMovieData.current = async () => {
        // setLoading(true);
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${collection}?api_key=${apiKey}`, fetcher);
            if (response.data.results) {
                setMovies(response.data.results);
                // setLoading(false);
            }
            // setMovieData(response.data.results ? response.data.results : [])

        } catch (error) {
            // setLoading(false)
        }
    }

    // useEffect(() => {
    //     if (data && data.results) {
    //         setMovies(data.results);
    //     }
    // }, [data])

    // useEffect(() => {
    //     if (data && data.results && movies && movies.length > 0) {
    //         setBackdrop(movies[0]);
    //     }
    // }, [movies]);

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