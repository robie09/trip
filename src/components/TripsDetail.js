import { DetailWrapper, ThemeButton } from "../styles";
// import products from "../products";

const TripDetail = (props) => {
  const trip = props.trip;

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
