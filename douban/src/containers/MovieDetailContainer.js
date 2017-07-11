import React, {Component} from 'react';
import server from "../services/MoveServer.js"
import "../styles/MovieDetailContainer.css"

/*
*这是电影详情组件
*
*
*/
export default class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            MovieDetail: {}
        }
    }

    componentDidMount() {
        this.fetch(this.props.params.id);
    }

    //去请求数据
    fetch = (id) => {
        const _this = this;
        server
            .getMovieDetailData(id)
            .then((value) => {
                //请求到数据后重新渲染数据
                console.log(value)
                _this.setState({
                    isLoading: false,
                    MovieDetail: value
                    })
            }, (error) => {
                console.log(error);
            });
    }

    renderLoading = () => {
        return <div>正在请求数据，请耐心等候...</div>
    }

    renderMovieDetail = () => {
        return <div className="MovieDetail-content">
        <div className="MovieDetail-img"><img src={this.state.MovieDetail.images.large}/></div>
        <div>
            <h1>{this.state.MovieDetail.title}</h1>
            <div>{this.state.MovieDetail.summary}</div>
        </div>

        </div>
    }

    render() {
        return this.state.isLoading
            ? this.renderLoading()
            : this.renderMovieDetail();
    }
}
