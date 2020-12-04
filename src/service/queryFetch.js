import axios from 'axios';

const queryFetch = function(query) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=01bf7b14925965ab82716a11e56f7786&query=${query}`)
};   

export default queryFetch;