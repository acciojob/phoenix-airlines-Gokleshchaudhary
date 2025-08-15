import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const FlightBooking = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = () => {
    if (name && email && phone) {
      dispatch({
        type: "SET_PASSENGER_DETAILS",
        payload: { name, email, phone },
      });
      history.push("/confirmation");
    } else {
      alert("Please fill all details");
    }
  };

  return (
    <div>
      <h2>Enter Passenger Details</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default FlightBooking;
