import axios from 'axios';
import React, {Component} from 'react';

class Cast extends Component {

    state = {
        actors: null
    }

    componentDidMount() {
        const {movieId} = this.props.match.params;
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=01bf7b14925965ab82716a11e56f7786`).then(res => this.setState({actors: res.data.cast}));
    }

    render() {

        return(
            <ul>
                {this.state.actors ? this.state.actors.map((el) => <li key={el.id} ><h2>{el.name}</h2><p>{el.character}</p>{el.profile_path ? <img src={`https://image.tmdb.org/t/p/w400${el.profile_path}`} alt=""/> : null}</li>) : null }
            </ul>
        )
    }

}

export default Cast;