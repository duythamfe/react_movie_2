export const fetcher = (...args) => fetch(...args).then(res => res.json());
export const apiKey = "04a3534c85b97d2bfd72d750a1764af1";

export const collectionList = [
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