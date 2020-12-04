import axios from 'axios';

const fetchFilms = function(movieId) {

    if(movieId) {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=01bf7b14925965ab82716a11e56f7786`)
    }

    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=01bf7b14925965ab82716a11e56f7786`)

};   

export default fetchFilms;