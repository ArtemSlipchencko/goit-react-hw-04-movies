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
        this.props.history.push({
            pathname: '/movies',
            search: query
        });
    };

    componentDidMount() {
        const query = this.props.history.location.search;

        if(query) {
            queryFetch(query).then(res => this.setState({films: res.data.results}));
        this.props.history.push({
            pathname: '/movies',
            search: query
        });
        }

        queryFetch(query).then(res => this.setState({films: res.data.results}));
        this.props.history.push({
            pathname: '/movies',
            search: query
        });
    }

    handleChange = ({target}) => {
        this.setState({query: target.value})
    };

    render() {
        return (
            <>
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
                                        state: {from: `/movies${this.props.history.location.search}`}
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