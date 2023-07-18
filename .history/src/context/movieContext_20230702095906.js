import { createContext, useContext, useState, useEffect } from "react";
import { apiKey } from '../config';
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
        id: 3, value: "top_tranding", text: "Now playing"
    },
]

function MovieProvider(props) {
    const [collection, setCollection] = useState(() => collectionList[0].value);
    const [movies, setMovies] = useState([]);
    const [backdrop, setBackdrop] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${collection}?api_key=${apiKey}`);
                const data = response.data;
                if (data && data.results) {
                    setMovies(data.results);
                    console.log(data);
                }
            } catch (error) {
                // Xử lý lỗi
            }
        };

        fetchData();
    }, [collection]);



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