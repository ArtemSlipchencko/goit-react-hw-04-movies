import React, {Component} from 'react';
import fetchFilms from '../service/API.js';
import {Route, Link} from 'react-router-dom';
import Cast from '../Components/Cast/Cast';
import Reviews from '../Components/Reviews/Reviews';
import getGenres from '../service/genres.js';

class MovieDetailsPage extends Component {

    state = {
        film: null,
        genres: null
    }

    componentDidMount() {

        const {movieId} = this.props.match.params;
        fetchFilms(movieId).then(res => this.setState({film: res.data}));
        getGenres().then(res => this.setState({genres: res.data.genres}));

    }

    handleGoBack = () => {
        this.props.history.push(this.props.location.state.from)
    }

    render() {

        const {film, genres} = this.state;
        let genreStr = "";
        if (film && genres) {
            genres.map(elOfgenres => {
                film.genres.map(elOfFilmGenres => {
                    if(elOfgenres.id === elOfFilmGenres.id) {
                        genreStr += ` ${elOfgenres.name}`;
                    }
                })
            })
        };
        
        return (
            <>
                <div>
                    <button onClick={this.handleGoBack} >Go back</button>
                    <h1>{film ? film.original_title : null}</h1>
                    <p>User score: {film ? `${film.vote_average * 10}%` : null}</p>
                    <img src={film ? `https://image.tmdb.org/t/p/w500${film.backdrop_path}` : null} alt=""/>
                    <h2>Genres:</h2>
                    <p>{genreStr}</p>
                    <h2>Overview:</h2>
                    <p>{film ? film.overview : null}</p>
                    <Link to={{
                        pathname: `${this.props.match.url}/cast`,
                        state: {
                            movieId: this.props.match.params.movieId,
                            from: this.props.location.state.from
                        }
                    }}>Cast/</Link>
                    <Link to={{
                        pathname: `${this.props.match.url}/reviews`,
                        state: {
                            movieId: this.props.match.params.movieId,
                            from: this.props.location.state.from
                        }
                    }}>/Reviews</Link>

                    <Route exact path="/movies/:movieId/cast" component={Cast} />
                    <Route path="/movies/:movieId/reviews" component={Reviews} />
                </div>
            </>
        )
    }

};

export default MovieDetailsPage;