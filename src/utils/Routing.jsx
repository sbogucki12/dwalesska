import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Error from "../Error/Error";
import AboutMain from "../Desktop/About/AboutMain";
import Contact from '../Home/Contact';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <AboutMain />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
};

export default Routing;
