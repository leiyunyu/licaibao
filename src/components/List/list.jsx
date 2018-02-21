import React, {Component} from 'react';
import Header from '../../components/Header/header.jsx';
class Listsmall extends Component{
    render(){
        return (<ul className="list">
                    <li>
                        <i className="iconfont icon-liwu"></i>
                        <span>推荐有礼</span>
                    </li>
                    <li>
                        <i className="iconfont icon-qiandao2"></i>
                        <span>签到</span>
                    </li>
                    <li>
                        <i className="iconfont icon-wodeliquan"></i>
                        <span>礼券</span>
                    </li>
                    <li>
                        <i className="iconfont icon-jifen"></i>
                        <span>积分</span>
                    </li>
            </ul>)
    }
}
export default Listsmall;