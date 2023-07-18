export const fetcher = (...args) => fetch(...args).then(res => res.json());
export const apiKey = "04a3534c85b97d2bfd72d750a1764af1";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";

export const tmdbAPI = {
    moviesApi: (collection) => `${tmdbEndpoint}/${collection}?api_key=${apiKey}`,
    movieDetail: (movie_id) => `${tmdbEndpoint}/${movie_id}?api_key=${apiKey}`,
    movieCredit: (movie_id) => `${tmdbEndpoint}/${movie_id}/credits?api_key=${apiKey}`,
    moviesSimilar: (movie_id) => `${tmdbEndpoint}/${movie_id}/similar?api_key=${apiKey}`,
    videoPlay: (movie_id) => `${tmdbEndpoint}/${movie_id}/videos?api_key=${apiKey}`,
    searchApi: (query, page) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
    imgPath: (url) => `https://image.tmdb.org/t/p/w500${url}`,
}

export const collectionData = [
    {
        id: 1, value: "now_playing", text: "Now playing"
    },
    {
        id: 2, value: "top_rated", text: "Top rated"
    },
    {
        id: 3, value: "popular", text: "Top trending"
    },
];