import React from 'react';
import * as router from 'react-router-dom';
import Header from '../components/Header/header.jsx';
let {NavLink, HashRouter, Route, BrowserRouter } = router;
class Register extends React.Component{
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
            <Header>注册</Header>
            <div className="form">
                <input type="text" placeholder="账号"/> 
                <input type="password" placeholder="密码"/> 
                <button onClick={this.go_to_home}>注册</button>
            </div>
        </div>);
    }
}
export default Register;