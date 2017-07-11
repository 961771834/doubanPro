import React, {Component} from 'react';
import {Link} from "react-router";
import PropTypes from "prop-types"

import "../styles/movieContainer.css"
/*
 *这是电影组件
 */
export default class MovieContainer extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    
    constructor(props) {
        super(props)
        this.state = {
            movieType: "in_theaters",
              keyword:''
        }
    }

    changeMovieType = (Type) => {
        this.setState({
            movieType:Type,
          
        })
    }

    getKeyword = (e) => {
        this.setState({
            keyword:e.target.value
        })
    }

    searchMovie = () => {
        this.context.router.push("/movie/movieSearch/"+this.state.keyword);
        this.setState({
            keyword:""
        })
    }

    render() {
        return (
            <div className="movie_container">
                <div className="moive_menu">
                    <Link
                        onClick={()=>this.changeMovieType("in_theaters")}
                        to="/movie/movieList/in_theaters"
                        className={this.state.movieType == "in_theaters"
                        ? "movie-current"
                        : ""}>正在热映</Link>
                    <Link
                        onClick={()=>this.changeMovieType("coming_soon")}
                        to="/movie/movieList/coming_soon"
                        className={this.state.movieType == "coming_soon"
                        ? "movie-current"
                        : ""}>即将上印</Link>
                    <Link
                        onClick={()=>this.changeMovieType("top250")}
                        to="/movie/movieList/top250"
                        className={this.state.movieType == "top250"
                        ? "movie-current"
                        : ""}>Top250</Link>
                </div>
                <div className="movie_right">
                    <div className="movie_search">
                        <input type="text" onChange = {this.getKeyword} value = {this.state.keyword} />
                        <button onClick = {this.searchMovie}>搜索</button>
                    </div>
                    <div className="movie_content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
