import React, {Component} from 'react';
class Header extends Component{
    render () {
        return (<header className="header">
            <a href="#"></a>
            <a href="#">{this.props.children}</a>
            <a href="javaScript:;"><i className="iconfont icon-gengduo1"></i></a>
        </header>);
    }
}
export default Header;