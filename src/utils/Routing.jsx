import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Error from "../Error/Error";
import AboutMain from "../Desktop/About/AboutMain";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <AboutMain />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
};

export default Routing;
