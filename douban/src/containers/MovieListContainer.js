import React, {Component} from 'react';
import server from "../services/MoveServer.js";
import PropTypes from "prop-types";
import "../styles/MovieList.css";
/*
*这是联系我们组件
*
*
*/
export default class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isBottom: false,
            isLoading: true,
            MovieList: [],
            message: {
                pageIndex: 1,
                start: 0,
                count: 10,
                movieType: "in_theaters"
            }
        }
    }

    static contextTypes = {
        router: PropTypes.object
    }

    fetch = (movieType) => {
        if (movieType != this.state.message.movieType) {
            //重置this.state
            this.setState({
                isBottom: false,
                isLoading: true,
                MovieList: [],
                message: {
                    pageIndex: 1,
                    start: 0,
                    count: 10,
                    movieType: movieType
                }
            })
            return
        }

        const _this = this;
        let message = Object.assign({}, this.state.message);
        //更新message;
        message.start = (message.pageIndex - 1) * message.count;
        message.pageIndex++;
        server
            .getMovieListData(JSON.stringify(message))
            .then((value) => {
                //更新moveListData;
                let moveListData = [
                    ..._this.state.MovieList,
                    ...value.subjects
                ];

                //这里要判断该元素是否存在_reactInternalInstance
                if (_this._reactInternalInstance) {
                    _this.setState({isLoading: false, MovieList: moveListData, message, isBottom: false})
                }

            }, (error) => {});
    }

    componentDidMount() {
        this.fetch(this.state.message.movieType);
    }

    componentDidUpdate() {
        if (this.state.isLoading) {
            this.refs.scrollContainer.onscroll = null;
            this.fetch(this.state.message.movieType);
        }
        this.addEventlistener();
    }

    componentWillReceiveProps(nextProps) {
        //如果movieType不同就更新
        this.fetch(nextProps.params.movieType);
    }
    addEventlistener = (e) => {
        //这里不能用addEventListener 每次更新后会绑定多个事件
        this.refs.scrollContainer.onscroll = (e) => {
            if (e.target.scrollHeight == e.target.offsetHeight + e.target.scrollTop) {
                if (this.setState.isBottom) {
                    return
                }
                this.setState({isBottom: true});
                this.fetch(this.state.message.movieType);
            }
        }
    }

    renderLoading = () => {
        return <div ref="scrollContainer">正在请求数据，请耐心等候...</div>
    }

    renderMovieList = () => {
        return <div className="MovieList-content" ref="scrollContainer">{this
                .state
                .MovieList
                .map(this.renderItem)}
            <div
                className={this.state.isBottom
                ? "movielist-isShow"
                : "movielist-isHide"}>
                <span>正在发送请求</span>
            </div>
        </div>
    }

    goDatail = (id) => {
        this
            .context
            .router
            .push(`/movie/movieDetail/${id}`);
    }

    renderItem = (item) => {
        return <div
            key={item.id + Math.random()}
            className="MovieList-item"
            onClick=
            {()=>this.goDatail(item.id)}>
            <img src={item.images.small}/>
            <div>
                <h1>{item.title}</h1>
                <span>{item.year}</span>
            </div>
        </div>
    }

    render() {
        return this.state.isLoading
            ? this.renderLoading()
            : this.renderMovieList();
    }
}
