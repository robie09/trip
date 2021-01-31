const Trip = (props) => {
  const trip = props.trip;

  return (
    //use route
    <>
      <img alt={trip.name} src={trip.image} />
      <p>{trip.name}</p>
    </>
  );
};

export default Trip;
