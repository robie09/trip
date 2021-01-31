import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

const Slider = () => {
  const [range, setRange] = useState(0);

  return (
    <RangeSlider
      value={range}
      onChange={(changeEvent) => props.setRange(changeEvent.target.value)}
    />
  );
};

export default Slider;
