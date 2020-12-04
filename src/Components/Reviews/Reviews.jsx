import axios from 'axios';
import React, {Component} from 'react';

class Reviews extends Component {

    state = {
        reviews: null
    }

    componentDidMount() {
        const {movieId} = this.props.match.params;
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=01bf7b14925965ab82716a11e56f7786`).then(res => this.setState({reviews: res.data.results}));
    }

    render() {

        return(
            <ul>
                {this.state.reviews ? this.state.reviews.map((el) => <li key={el.id}><h2>Author: {el.author}</h2><p>{el.content}</p></li>) : null }
            </ul>
        )
    }

}

export default Reviews;