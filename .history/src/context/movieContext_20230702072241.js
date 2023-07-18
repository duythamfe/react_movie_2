import { createContext, useContext, useState } from "react";

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

    const value = {};

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