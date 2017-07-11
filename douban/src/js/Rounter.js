import React, {Component} from 'react';
import {
    Router,
    Route,
    IndexRoute,
    Link,
    hashHistory,
    Redirect,
    browserHistory
} from 'react-router'

/*
* 相关的组件
**/
import AppContainer from '../containers/AppContainer.js'
import HomeContainer from '../containers/HomeContainer.js'
// import MovieContainer from '../containers/MovieContainer.js'
// import MovieListContainer from '../containers/MovieListContainer.js'
// import MovieDetailContainer from '../containers/MovieDetailContainer.js'
// import MovieSearchContainer from '../containers/movieSearchContainer.js'
// import AboutContainer from '../containers/AboutContainer.js'

export default class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={HomeContainer}/>
                <Route component={HomeContainer}/>
                <Route
                    path="about"
                    getComponent={(nextState, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('../containers/AboutContainer.js')).default
                    }, 'about')
                }}/>
                <Route
                    path="movie"
                    getComponent={(nextState, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('../containers/MovieContainer.js').default)
                    }, 'movie')
                }}>
                    <IndexRoute
                        getComponent={(nextState, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('../containers/MovieListContainer.js').default)
                        }, 'movieList')
                    }}/>
                    <Route
                        path="movieList/:movieType"
                        getComponent={(nextState, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('../containers/MovieListContainer.js').default)
                        }, 'movieList')
                    }}/>
                    <Route
                        path="movieDetail/:id"
                        getComponent={(nextState, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('../containers/MovieDetailContainer.js').default)
                        }, 'movieDetail')
                    }}/>
                    <Route
                        path="movieSearch/:keyword"
                        getComponent={(nextState, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('../containers/movieSearchContainer.js').default)
                        }, 'movieSearch')
                    }}/>
                </Route>
            </Route>

        </Router>
    }
}
