import React, {Component} from 'react';
import * as router from 'react-router-dom';
import Header from '../../components/Header/header.jsx';
import Footer from '../../components/Footer/footer.jsx';
import Pages from '../../views/cont/pages.jsx';
import Licai from '../../views/cont/licai.jsx';
import Zhanghu from '../../views/cont/zhanghu.jsx';
import Gengduo from '../../views/cont/gengduo.jsx';
let {NavLink, HashRouter, Route, BrowserRouter, Switch } = router;
class Section extends Component{
    render(){
        return (<HashRouter>
                <div className="bigBox"> 
                    <div className="section">
                        <Switch>
                            <Route path="/home/pages" component={Pages}></Route>
                            <Route path="/home/licai" component={Licai}></Route>
                            <Route path="/home/zhanghu" component={Zhanghu}></Route>
                            <Route path="/home/gengduo" component={Gengduo}></Route>
                        </Switch>
                    </div>
                    <Footer></Footer>
                </div>
        </HashRouter>)
    }
}
export default Section;