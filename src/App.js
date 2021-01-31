import "./App.css";
import TripList from "./components/TripList.js";
import TripsDetail from "./components/TripsDetail";
import trips from "./trips.js";
import React, { useState } from "react";
import { Route, Switch } from "react-router";

function App() {
  const [trip, setTrip] = useState(null);
  const [rate, setRate] = useState();
  return (
    <div className="App">
      <header className="App-header"></header>
      <Switch>
        <Route exact path="/">
          <TripList trips={trips} setTrip={setTrip} />
        </Route>
        <Route path="/TripDetail">
          <TripsDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
