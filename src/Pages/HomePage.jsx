import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fetchFilms from '../service/API.js';

class HomePage extends Component {

    state = {
        films: [],
    };

    componentDidMount() {
        fetchFilms().then(res => this.setState({films: res.data.results}));
    };

    render() {
        return (
            <>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                </ul>
                <h1>Home</h1>
                <ul>
                    {
                        this.state.films.map(el => {
                            return (
                                <li key={el.id}>
                                    <Link to={{
                                        pathname: `/movies/${el.id}`,
                                        state: {from: this.props.match.url}
                                    }}>{el.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    };

};

export default HomePage;