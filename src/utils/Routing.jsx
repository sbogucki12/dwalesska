import { Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import Error from '../Error/Error';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
		  <Home />
	  </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
};

export default Routing;
