import React, { useState } from "react";
import Trip from "./Trip";
import SearchBar from "./SearchBar";
import Slider from "./components/Slider.js";

const TripList = (props) => {
  const [query, setQuery] = useState("");

  const tripList = props.trips
    .filter((trip) => trip.name.toLowerCase().includes(query))
    .map((trip) => <Trip trip={trip} key={trip.id} setTrip={props.setTrip} />);
  return (
    <>
      {<SearchBar setQuery={setQuery} />}
      {}
      {tripList}
    </>
  );
};

export default TripList;
