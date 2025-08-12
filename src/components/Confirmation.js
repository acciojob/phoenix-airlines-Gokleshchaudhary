import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Confirmation() {
  const loc = useLocation();
  const navigate = useNavigate();
  const id = loc.state?.id;
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (!id) {
      // maybe try to read from query; fallback nav home
      navigate('/');
      return;
    }
    axios.get(`http://localhost:5000/api/booking/${id}`).then(r => setBooking(r.data)).catch(() => navigate('/'));
  }, [id, navigate]);

  if (!booking) return <p>Loading...</p>;

  return (
    <main>
      <h2>Booking Confirmation</h2>
      <p>Booking ID: <strong>{booking.id}</strong></p>
      <p>Passenger: {booking.passenger.name} ({booking.passenger.email})</p>
      <p>Flight: {booking.flight?.airline} {booking.flight?.id} - {booking.flight?.from} → {booking.flight?.to}</p>
      <p>Status: {booking.status}</p>
      <button onClick={() => navigate('/')}>Return Home</button>
    </main>
  );
}

