import React, {Component} from 'react';
import * as router from 'react-router-dom';
import Login from '../login.jsx';
import Swipers from '../../components/Swiper/swiper.jsx';
import Header from '../../components/Header/header.jsx';
import List from '../licai/list.jsx';
let {NavLink, HashRouter, Route, BrowserRouter, Switch, Link } = router;
class Pages extends Component{
    render(){
        return (<div className="pages">
            <Header>开财宝</Header>
            <section className="page_section">
                <Swipers></Swipers>
                <div className="totalMoney">
                    <a href="#"><span>累计成交金额</span><b>29,089.80万元</b></a>
                    <a href="#"><span>为投资人赚取利益</span><b>594.89万元</b></a>
                </div>
                <ul className="uls">
                    <List></List>
                </ul>
            </section>
        </div>)
    }
}
export default Pages;