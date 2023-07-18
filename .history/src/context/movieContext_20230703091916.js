import { createContext, useContext, useState, useEffect } from "react";
import useSWR from 'swr';
import { apiKey, fetcher, collectionData } from '../config';

const MovieContext = createContext();

function MovieProvider(props) {
    const [collection, setCollection] = useState();
    const [movies, setMovies] = useState([]);
    const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`, fetcher)
    const [backdrop, setBackdrop] = useState();

    useEffect(() => {
        setCollection(collectionData[0].value)
        if (data && data.results.length > 0) {
            setMovies(data.results)
            setBackdrop(movies[0])
            console.log(backdrop);
        }
    }, [data])


    function changeCollection(e) {
        setCollection(e.target.dataset.value);
    }

    const value = { collection, setCollection, backdrop, setBackdrop, movies, setMovies, changeCollection, isLoading };

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