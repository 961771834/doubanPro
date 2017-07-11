import React,{Component} from 'react'
import {Link} from 'react-router'

/*
*应用根组件
*
*
*/
export default class AboutContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
           <div className="app_container">
               <div className="app_header">
                   <Link to="/home">首页</Link>
                   <Link to="/movie">电影 </Link>
                   <Link to="/about">联系我们</Link>
               </div>
               <div className="app_content">
                   {/*这是路由要挖取的坑*/}
                   {this.props.children}
               </div>
               <div className="app_footer">
                   <span>版权所有@黑马程序员</span>
               </div>
           </div>
        );
    }
}

