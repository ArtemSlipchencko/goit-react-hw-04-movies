import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fetchFilms from '../service/API.js';
import queryFetch from '../service/queryFetch.js';

class MoviesPage extends Component {

    state = {
        query: "",
        films: [],
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {query} = this.state;
        queryFetch(query).then(res => this.setState({films: res.data.results}));
    };

    handleChange = ({target}) => {
        this.setState({query: target.value})
    };

    render() {
        return (
            <>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                </ul>
                <h1>Movies</h1>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" onChange={this.handleChange} value={this.state.query} />
                    <button type="submit">Search</button>
                </form>
                <ul>
                    {
                        this.state.films.map(el => {
                            return (
                                <li key={el.id}>
                                    <Link to={{
                                        pathname: `/movies/${el.id}`,
                                        state: this.props.match.path
                                    }}>{el.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }

};

export default MoviesPage;