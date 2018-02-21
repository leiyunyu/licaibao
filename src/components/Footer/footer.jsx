import React, {Component} from 'react';
import * as router from 'react-router-dom';
import Pages from '../../views/cont/pages.jsx';
import Licai from '../../views/cont/licai.jsx';
import Zhanghu from '../../views/cont/zhanghu.jsx';
import Gengduo from '../../views/cont/gengduo.jsx';
let {NavLink, HashRouter, Route, BrowserRouter } = router;
class Footer extends React.Component{
    constructor(){
        super();
        this.state={
            current: 1
        };
    }
    render () {
        let arr = [
            {
                'icon': 'iconfont icon-yuanbao',
                'text': '首页',
                'path': '/home/pages'
            },
            {
                'icon': 'iconfont icon-licaichanpin',
                'text': '理财产品',
                'path': '/home/licai'
            },
            {
                'icon': 'iconfont icon-icon',
                'text': '我的账户',
                'path': '/home/zhanghu'
            },
            {
                'icon': 'iconfont icon-gengduo',
                'text': '更多',
                'path': '/home/gengduo'
            }
        ];
        return <footer className="footer">  
                    {arr.map((item, index) => {
                        return <div key={index}>
                            <NavLink activeClassName="active" to={item.path}>
                                <i className={item.icon}></i>
                                <span>{item.text}</span>
                            </NavLink>
                        </div>;
                    })}
                </footer>;
    }
}
export default Footer;