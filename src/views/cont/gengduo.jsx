import React, {Component} from 'react';
import Header from '../../components/Header/header.jsx';
import {connect} from 'react-redux';
class Gengduo extends Component{
    constructor(){
        super();
        this.state = {
            arr: []
        };
        this.updata_list = this.updata_list.bind(this);
        this.add_list = this.add_list.bind(this);        
    }
    componentDidMount(){
        
    } 
    updata_list(){
        this.props.updataPoem();
    }  
    add_list(){
        this.props.addPoem(this.refs.poem.value);
    }
    render(){
        return (<div className="geng">
            <Header>更多</Header>
                {/* <ul className="ulss">
                    <li><i className="iconfont icon-xinwengonggao"></i>新闻广告</li>
                    <li><i className="iconfont icon-tuhaobang"></i>土豪榜</li>
                    <li><i className="iconfont icon-yuanbao1"></i>关于我们</li>
                    <li><i className="iconfont icon-ordinarycontact"></i>联系我们</li>
                    <li><i className="iconfont icon-yonghuxieyi"></i>用户协议</li>
                    <li><i className="iconfont icon-bangzhu"></i>帮助中心</li>
                </ul> */}
                <ul className="ulss">
                    <input type="text" ref="poem"/>
                    <button onClick={this.add_list}>add</button>
                    <h1 onClick={this.updata_list}>悯农</h1>
                    {this.props.poem.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })}
                </ul>
        </div>)
    }
}
function mapStateToProps(state){
    console.log(state)
    return {
        poem: state.poem
    }
}
function mapDispatchToProps(dispatch){
    return {
        updataPoem: () => {
            fetch('./src/data/poem.json').then(res => {
                return res.json()
             }).then(res => {
                 console.log(res);
                dispatch({
                    type: 'concat',
                    data: res.poem
                })
             })
        },
        addPoem: (poem) => {
            dispatch({
                type: 'add',
                data: poem
            })
        }
    }
}   
export default connect(mapStateToProps, mapDispatchToProps)(Gengduo);