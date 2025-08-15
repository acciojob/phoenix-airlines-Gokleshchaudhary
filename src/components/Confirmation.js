import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Confirmation = () => {
  const booking = useSelector((state) => state.booking);

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>
        Your flight from <b>{booking.source}</b> to <b>{booking.destination}</b>{" "}
        is confirmed.
      </p>
      <p>Passenger: {booking.name}</p>
      <p>Email: {booking.email}</p>
      <p>Phone: {booking.phone}</p>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default Confirmation;
