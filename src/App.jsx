import React, {Component, lazy, Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
// import HomePage from './Pages/HomePage';
// import MoviesPage from './Pages/MoviesPage';
// import MovieDetailsPage from './Pages/MovieDetailsPage';
import './App.css';

class App extends Component {

    render() {
        return (
            <Suspense fallback={<h1>Loading...</h1>}>
            <Header />
            <Switch>
                <Route path="/" exact component={lazy(() => import('./pages/HomePage'))}/>
                <Route path="/movies/:movieId" component={lazy(() => import('./pages/MovieDetailsPage'))}/>
                <Route path="/movies" component={lazy(() => import('./pages/MoviesPage'))}/>
                <Redirect to="/" />
            </Switch>
            </Suspense>
        );
    }
    

};

export default App;