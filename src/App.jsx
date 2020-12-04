import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MoviesPage from './Pages/MoviesPage';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import './App.css';

class App extends Component {

    render() {
        return (
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/movies/:movieId" component={MovieDetailsPage}/>
                <Route path="/movies" component={MoviesPage}/>
                <Redirect to="/" />
            </Switch>
        );
    }
    

};

export default App;