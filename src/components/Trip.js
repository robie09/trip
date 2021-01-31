import { Link } from "react-router-dom";

const Trip = (props) => {
  const trip = props.trip;

  return (
    //use route
    <>
      <Link to={`/trip/${trip.slug}`}>
        {" "}
        <img alt={trip.name} src={trip.image} />
      </Link>
      <p>{trip.name}</p>
    </>
  );
};

export default Trip;
