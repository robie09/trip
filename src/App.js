import "./App.css";
import TripList from "./components/TripList.js";
import TripDetail from "./components/TripDetail";
import trips from "./trips.js";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Slider from "./components/Slider.js";

function App() {
  const [trip, setTrip] = useState(null);
  const [rate, setRate] = useState();
  return (
    <div className="App">
      <header className="App-header"></header>
      <Switch>
        {/* <Link to="/trip/:tripSlug"> Link Twist</Link> */}
        <Route path="/">
          <TripList trips={trips} />
        </Route>
        <TripDetail />
      </Switch>
    </div>
  );
}

export default App;
