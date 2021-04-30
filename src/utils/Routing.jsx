//import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import Home from '../home/Home';
import Instagram from '../home/instagram/Instagram';

function Routing() {
	return (
		<Switch>
			<Route exact path="/new">
				<Home />
			</Route>
			<Route exact path="/instagram">
				<Instagram />
			</Route>
			<Route path="/">
				<Landing />
			</Route>
		</Switch>
	);
}

export default Routing;
