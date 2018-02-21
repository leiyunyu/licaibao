import React from 'react';
import * as router from 'react-router-dom';
import Header from '../components/Header/header.jsx';
let {NavLink, HashRouter, Route, BrowserRouter } = router;
class Login extends React.Component{
    constructor(){
        super();
        this.go_to_home = this.go_to_home.bind(this);
    }
    go_to_home(){
        let {history} = this.props;
        history.push({
            pathname: '/home/zhanghu'
        })
    }
    render(){
        return (<div className="wraps">
            <Header>登录</Header>
            <div className="form">
                <input type="text" placeholder="账号"/> 
                <input type="password" placeholder="密码"/> 
                <button onClick={this.go_to_home}>登录</button>
            </div>
        </div>);
    }
}
export default Login;