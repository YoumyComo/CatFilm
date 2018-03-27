import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Nav from 'components/Nav/Nav'

import Home from 'pages/Home/Home';
import Page1 from 'pages/Page1/page1';
import Page2 from 'pages/Page2/page2';
import Page3 from 'pages/Page3/page3';

const createComponent = (component) = (props) => {
   return component;
}

export default () => (
     <div>
        
     	<Router>
     	    <Nav/>
     		<Route  path='/' component = {Home} />
       		<Route  path='/page1' component = {Page1} />
       		<Route  path='/page2' component = {Page2} />
       		<Route  path='/page3' component = {Page3} />
     	</Router>
     </div>
	)