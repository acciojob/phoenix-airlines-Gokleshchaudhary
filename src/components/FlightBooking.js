import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBooking } from '../features/bookingSlice';
import { useNavigate } from 'react-router-dom';

export default function FlightBooking() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookingState = useSelector(s => s.booking);

  const [flight, setFlight] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const sel = sessionStorage.getItem('selectedFlight');
    if (!sel) {
      navigate('/flight-search');
      return;
    }
    setFlight(JSON.parse(sel));
  }, [navigate]);

  const validate = () => {
    if (!name || !email || !phone) return 'All fields required';
    // basic email and phone validation
    const emailRe = /^\S+@\S+\.\S+$/;
    const phoneRe = /^\d{7,15}$/;
    if (!emailRe.test(email)) return 'Invalid email';
    if (!phoneRe.test(phone)) return 'Invalid phone';
    return null;
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { alert(err); return; }
    const result = await dispatch(createBooking({ flightId: flight.id, passenger: { name, email, phone } }));
    if (createBooking.fulfilled.match(result)) {
      // booking created
      const id = result.payload.id;
      navigate('/confirmation', { state: { id }});
    } else {
      alert('Booking failed: ' + (result.error?.message || 'unknown'));
    }
  };

  if (!flight) return null;

  return (
    <main>
      <h2>Flight Booking</h2>
      <div>
        <p>Flight: <strong>{flight.airline} {flight.id}</strong></p>
        <p>{flight.from} → {flight.to} on {flight.depart} - ${flight.price}</p>
      </div>

      <form onSubmit={handleConfirm}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" value={phone} onChange={e=>setPhone(e.target.value)} />
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
      {bookingState.status === 'loading' && <p className="loading">Booking...</p>}
    </main>
  );
}

