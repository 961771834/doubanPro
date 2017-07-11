webpackJsonp([2],{240:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(5),i=_interopRequireDefault(r),a=(n(33),n(10)),s=_interopRequireDefault(a),u=n(242),c=_interopRequireDefault(u),l=function(e){function MovieSearchContainer(e){_classCallCheck(this,MovieSearchContainer);var t=_possibleConstructorReturn(this,(MovieSearchContainer.__proto__||Object.getPrototypeOf(MovieSearchContainer)).call(this,e));return t.fetch=function(e){if(e!=t.state.message.keyword)return void t.setState({isBottom:!1,isLoading:!0,MovieList:[],message:{pageIndex:1,start:0,count:10,keyword:e}});var n=t,o=Object.assign({},t.state.message);o.start=(o.pageIndex-1)*o.count,o.pageIndex++,c.default.getSearchMovieData(JSON.stringify(o)).then(function(e){var t=[].concat(_toConsumableArray(n.state.MovieList),_toConsumableArray(e.subjects));n.setState({isLoading:!1,MovieList:t,message:o,isBottom:!1})},function(e){})},t.addEventlistener=function(e){t.refs.scrollContainer.onscroll=function(e){if(e.target.scrollHeight==e.target.offsetHeight+e.target.scrollTop){if(t.setState.isBottom)return;t.setState({isBottom:!0}),t.fetch(t.state.message.keyword)}}},t.renderLoading=function(){return i.default.createElement("div",{ref:"scrollContainer"},"正在请求数据，请耐心等候...")},t.renderMovieList=function(){return i.default.createElement("div",{className:"MovieList-content",ref:"scrollContainer"},t.state.MovieList.map(t.renderItem),i.default.createElement("div",{className:t.state.isBottom?"movielist-isShow":"movielist-isHide"},i.default.createElement("span",null,"正在发送请求")))},t.goDatail=function(e){t.context.router.push("/movie/movieDetail/"+e)},t.renderItem=function(e){return i.default.createElement("div",{key:e.id+Math.random(),className:"MovieList-item",onClick:function(){return t.goDatail(e.id)}},i.default.createElement("img",{src:e.images.small}),i.default.createElement("div",null,i.default.createElement("h1",null,e.title),i.default.createElement("span",null,e.year)))},t.state={isBottom:!1,isLoading:!0,MovieList:[],message:{pageIndex:1,start:0,count:10,keyword:t.props.params.keyword}},t}return _inherits(MovieSearchContainer,e),o(MovieSearchContainer,[{key:"componentDidMount",value:function(){this.fetch(this.state.message.keyword)}},{key:"componentDidUpdate",value:function(){this.state.isLoading&&(this.refs.scrollContainer.onscroll=null,this.fetch(this.state.message.keyword)),this.addEventlistener()}},{key:"componentWillReceiveProps",value:function(e){this.fetch(e.params.keyword)}},{key:"render",value:function(){return this.state.isLoading?this.renderLoading():this.renderMovieList()}}]),MovieSearchContainer}(r.Component);l.contextTypes={router:s.default.object},t.default=l},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={SERVER_PATH:"127.0.0.1",PORT:"3008",HTTP:"http://",VERSION:"1.0.0"}},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getMovieListData:function(e){var t=n(241);console.log(e);var o=t.default.HTTP+""+t.default.SERVER_PATH+":"+t.default.PORT+"/getMovieListData?message="+e;return new Promise(function(e,t){fetch(o).then(function(e){if(e.ok)return e.json();console.error("服务器繁忙，请稍后再试；\r\nCode:"+e.status)}).then(function(t){e(t)}).catch(function(e){t(data)})})},getMovieDetailData:function(e){var t=n(241),o=t.default.HTTP+""+t.default.SERVER_PATH+":"+t.default.PORT+"/getMovieDetailData?id="+e;return new Promise(function(e,t){fetch(o).then(function(e){if(e.ok)return e.json();console.error("服务器繁忙，请稍后再试；\r\nCode:"+e.status)}).then(function(t){e(t)}).catch(function(e){t(data)})})},getSearchMovieData:function(e){var t=n(241);console.log(e);var o=t.default.HTTP+""+t.default.SERVER_PATH+":"+t.default.PORT+"/getSearchMovieData?message="+e;return new Promise(function(e,t){fetch(o).then(function(e){if(e.ok)return e.json();console.error("服务器繁忙，请稍后再试；\r\nCode:"+e.status)}).then(function(t){e(t)}).catch(function(e){t(data)})})}}}});