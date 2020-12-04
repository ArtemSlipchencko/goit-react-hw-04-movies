import axios from 'axios';

const getGenres = function() {
    return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=01bf7b14925965ab82716a11e56f7786')
};

export default getGenres;