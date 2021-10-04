import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Error from "../Error/Error";
import AboutMain from "../Desktop/About/AboutMain";
import ContactMain from "../Desktop/Contact/ContactMain";

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
        <ContactMain />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
};

export default Routing;
