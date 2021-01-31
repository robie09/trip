import { useParams } from "react-router";

const TripDetail = (props) => {
  const tripSlug = useParams().tripSlug;
  const trip = props.trips.find((trip) => trip.slug === tripSlug);
  return (
    <>
      <h1>{trip.name}</h1>
      <img src={trip.image} alt={trip.name} />
      <p>{trip.difficulty}</p>
      <p>{trip.length}</p>
      //rate
      <br />
    </>
  );
};

export default TripDetail;
