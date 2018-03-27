import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
	render() {
		return (
			<ul>
				<li><Link to='/'/>首页</li>
				<li><Link to='/page1'/>Page1</li>
				<li><Link to='/page2'/>page2</li>
				<li><Link to='/page3'/>page3</li>
			</ul>
			)
	}
}