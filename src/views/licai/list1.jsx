import React, {Component} from 'react';
import 'isomorphic-fetch';
import Canvas from '../../components/Canvas/canvas.jsx';
class List1 extends Component{
    constructor(){
        super();
        this.state={
            list: []
        }
    }
    componentDidMount(){
        fetch('./src/data/data.json').then(res => {
            return res.json()
        }).then(res => {
            this.setState({
                list: res
            })
        }) 
    }
    render () {
        let list2 = this.state.list;
        return (list2.map((item, index) => {
            return (<li className="li" key={index}>
                <h2>{item.title} <span>| {item.date}</span></h2>
                <aside>
                    <a href="javescript:;">{item.number}</a>
                    <a href="javescript:;"><span>年化收益</span><em>.0%</em></a>
                    <a href="javescript:;"><span>期限</span><b><strong>{item.qixian}</strong>个月</b></a>
                    <a href="javescript:;"><Canvas data={list2}></Canvas><small>已有<u>{item.people}</u>购买</small></a>
                </aside>
        </li>);
        }));
    }
}
export default List1;