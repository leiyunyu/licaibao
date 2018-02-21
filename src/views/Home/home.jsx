import React from 'react';
import * as router from 'react-router-dom';
import Section from './section.jsx';
let {NavLink, HashRouter, Route, BrowserRouter } = router;
class Wrapper extends React.Component{
    render(){
        return (<div className="wrap">
            <Section></Section>
        </div>);
    }
}
export default Wrapper;