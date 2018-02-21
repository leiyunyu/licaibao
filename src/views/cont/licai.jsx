import React, {Component} from 'react';
import Tabs from '../licai/tabs.jsx';
import Header from '../../components/Header/header.jsx';
class Licai extends Component{
    render(){
        return (<div>
            <Header>理财产品</Header>
            <Tabs></Tabs>
        </div>)
    }
}
export default Licai;