import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Home from './Component/Home';
import Form from './Component/Form';
import Offer from './Component/Offer';
import Member from './Component/Member';
import {Router,Route,browserHistory} from 'react-router'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/form" component={Form}/>
        <Route path="/offer" component={Offer}/>
        <Route path="/member" component={Member}/>
    </Router>, document.getElementById('root')
    );
  

