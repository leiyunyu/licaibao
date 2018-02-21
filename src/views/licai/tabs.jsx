import React, {Component} from 'react';
import * as router from 'react-router-dom';
import List from '../licai/list.jsx';
import List1 from '../licai/list1.jsx';
let {NavLink, HashRouter, Route, BrowserRouter, Switch } = router;
class Tabs extends Component{
    render(){
        return (<HashRouter>
                <div>
                    <ul className="tabs">
                        <li><NavLink activeClassName="actived" to="/home/licai/list">债券产品</NavLink></li>
                        <li><NavLink activeClassName="actived" to="/home/licai/list1">优选基金</NavLink></li>
                    </ul>
                    <div className="content">
                        {/* <Route path='/' exact render={() => <Redirect to='/home/licai/list' />}></Route> */}
                        <Route path="/home/licai/list" component={List}></Route>
                        <Route path="/home/licai/list1" component={List1}></Route>
                    </div>
                </div>
        </HashRouter>)
    }
}
export default Tabs;