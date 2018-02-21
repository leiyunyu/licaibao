import React, {Component} from 'react';
import {connect} from 'react-redux';
import Table from './table.jsx';
import Listsmall from '../../components/List/list.jsx';
import 'antd/dist/antd.css';
import TableWraper from '../../components/tab_nav/tableNav.jsx'
let TableWraperNav = TableWraper(Table);
class Zhanghu extends Component{
    constructor(){
        super();
        this.go_to_login = this.go_to_login.bind(this);
        this.go_to_register = this.go_to_register.bind(this);
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);        
    }
    go_to_login(){
        let {history} = this.props;
        history.push({
            pathname: '/login'
        })
    }
    go_to_register(){
        let {history} = this.props;
        history.push({
            pathname: '/register'
        })
    }
    add(){
        let {dispatch} = this.props;
        dispatch({
            type: 'add'
        })
    }
    minus(){
        let {dispatch} = this.props;
        dispatch({
            type: 'minus'
        })
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (<TableWraperNav />)
    }
}
function mapStateToProps(state){
    return {
        count: state.count
    }
}
{/* <div className="zhanghu">
             <div className="top">
                <img src="src/static/img/p6.jpg" alt=""/>
                <p><button onClick={this.go_to_login}>登录</button><button onClick={this.go_to_register}>注册</button></p>
            </div>
            <Listsmall></Listsmall>
            <ul className="uls">
                <li><i className="iconfont icon-woyaotouzi"></i>我的投资<span>0.00 ></span></li>
                <li><i className="iconfont icon-icon08"></i>交易记录<span>0.00 ></span></li>
                <li><i className="iconfont icon-shenfenrenzheng"></i>身份认证<span>未认证 ></span></li>
                <li><i className="iconfont icon-wodeyinhangqia"></i>我的银行卡<span>未绑定 ></span></li>
                <li><i className="iconfont icon-shezhi"></i>设置<span> ></span></li>
            </ul>
            <ul className="uls">
                <button onClick={this.add}>增加</button><button onClick={this.minus}>减少</button>
                <li>{this.props.count}</li>
            </ul> 
        </div> */}
export default connect(mapStateToProps)(Zhanghu);
