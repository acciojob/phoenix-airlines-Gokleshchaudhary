import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import FlightSearch from "./components/FlightSearch";
import FlightBooking from "./components/FlightBooking";
import Confirmation from "./components/Confirmation";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/flight-search" component={FlightSearch} />
        <Route path="/flight-booking" component={FlightBooking} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </div>
  );
};

export default App;
