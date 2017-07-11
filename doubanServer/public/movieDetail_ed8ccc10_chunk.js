webpackJsonp([1],{239:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(5),r=_interopRequireDefault(i),a=n(242),l=_interopRequireDefault(a);n(246);var u=function(e){function MovieDetailContainer(e){_classCallCheck(this,MovieDetailContainer);var t=_possibleConstructorReturn(this,(MovieDetailContainer.__proto__||Object.getPrototypeOf(MovieDetailContainer)).call(this,e));return t.fetch=function(e){var n=t;l.default.getMovieDetailData(e).then(function(e){console.log(e),n.setState({isLoading:!1,MovieDetail:e})},function(e){console.log(e)})},t.renderLoading=function(){return r.default.createElement("div",null,"正在请求数据，请耐心等候...")},t.renderMovieDetail=function(){return r.default.createElement("div",{className:"MovieDetail-content"},r.default.createElement("div",{className:"MovieDetail-img"},r.default.createElement("img",{src:t.state.MovieDetail.images.large})),r.default.createElement("div",null,r.default.createElement("h1",null,t.state.MovieDetail.title),r.default.createElement("div",null,t.state.MovieDetail.summary)))},t.state={isLoading:!0,MovieDetail:{}},t}return _inherits(MovieDetailContainer,e),o(MovieDetailContainer,[{key:"componentDidMount",value:function(){this.fetch(this.props.params.id)}},{key:"render",value:function(){return this.state.isLoading?this.renderLoading():this.renderMovieDetail()}}]),MovieDetailContainer}(i.Component);t.default=u},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={SERVER_PATH:"127.0.0.1",PORT:"3008",HTTP:"http://",VERSION:"1.0.0"}},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getMovieListData:function(e){var t=n(241);console.log(e);var o=t.default.HTTP+""+t.default.SERVER_PATH+":"+t.default.PORT+"/getMovieListData?message="+e;return new Promise(function(e,t){fetch(o).then(function(e){if(e.ok)return e.json();console.error("服务器繁忙，请稍后再试；\r\nCode:"+e.status)}).then(function(t){e(t)}).catch(function(e){t(data)})})},getMovieDetailData:function(e){var t=n(241),o=t.default.HTTP+""+t.default.SERVER_PATH+":"+t.default.PORT+"/getMovieDetailData?id="+e;return new Promise(function(e,t){fetch(o).then(function(e){if(e.ok)return e.json();console.error("服务器繁忙，请稍后再试；\r\nCode:"+e.status)}).then(function(t){e(t)}).catch(function(e){t(data)})})},getSearchMovieData:function(e){var t=n(241);console.log(e);var o=t.default.HTTP+""+t.default.SERVER_PATH+":"+t.default.PORT+"/getSearchMovieData?message="+e;return new Promise(function(e,t){fetch(o).then(function(e){if(e.ok)return e.json();console.error("服务器繁忙，请稍后再试；\r\nCode:"+e.status)}).then(function(t){e(t)}).catch(function(e){t(data)})})}}},243:function(e,t,n){t=e.exports=n(235)(),t.push([e.i,".MovieDetail-content{\r\n    height: 100%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.MovieDetail-img{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}",""])},246:function(e,t,n){var o=n(243);"string"==typeof o&&(o=[[e.i,o,""]]);n(236)(o,{});o.locals&&(e.exports=o.locals)}});