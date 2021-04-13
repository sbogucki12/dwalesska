//import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import Home from '../home/Home';

function Routing() {
	return (
		<Switch>
			<Route exact path="/new">
				<Home />
			</Route>
			<Route path="/">
				<Landing />
			</Route>
		</Switch>
	);
}

export default Routing;
