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
    const [movies, setMovies] = useState([]);
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/now_playing?api_key=04a3534c85b97d2bfd72d750a1764af1`, fetcher)
    const [backdrop, setBackdrop] = useState();
    console.log(data);

    useEffect(() => {
        if (data && data.results) {
            setMovies(data.results);
        }
    }, [data])

    useEffect(() => {
        if (movies.length > 0) {
            setBackdrop(movies[0]);
        }
    }, [movies]);

    const value = { collection, setCollection, backdrop, setBackdrop, movies, setMovies };

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