import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchFlights, clearResults } from '../features/searchSlice';
import { useNavigate } from 'react-router-dom';

export default function FlightSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const flights = useSelector(state => state.search.flights);
  const status = useSelector(state => state.search.status);

  const [type, setType] = useState('one-way');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    // simple validation
    if (!from || !to || !departDate) {
      alert('Please enter source, destination and depart date');
      return;
    }
    await dispatch(searchFlights({ type, from, to, departDate, returnDate }));
  };

  const handleBook = (flight) => {
    // store selected flight in session storage then navigate to booking page
    sessionStorage.setItem('selectedFlight', JSON.stringify(flight));
    navigate('/flight-booking');
  };

  return (
    <main>
      <h2>Flight Search</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label>
            <input type="radio" checked={type === 'one-way'} onChange={() => setType('one-way')} /> One-way
          </label>
          <label>
            <input type="radio" checked={type === 'round-trip'} onChange={() => setType('round-trip')} /> Round-trip
          </label>
        </div>
        <div>
          <input type="text" placeholder="From" value={from} onChange={(e)=>setFrom(e.target.value)} />
          <input type="text" placeholder="To" value={to} onChange={(e)=>setTo(e.target.value)} />
        </div>
        <div>
          <input type="date" value={departDate} onChange={(e)=>setDepartDate(e.target.value)} />
          {type === 'round-trip' && <input type="date" value={returnDate} onChange={(e)=>setReturnDate(e.target.value)} />}
        </div>
        <button type="submit">Search</button>
        <button type="button" onClick={() => { dispatch(clearResults()); setFrom(''); setTo('');}}>Clear</button>
      </form>

      <section>
        <h3>Results ({status})</h3>
        {flights.length === 0 && <p>No flights</p>}
        <ul>
          {flights.map(f => (
            <li key={f.id}>
              <div>
                <strong>{f.airline} {f.id}</strong> {f.from} → {f.to} on {f.depart} - ${f.price}
              </div>
              <button className="book-flight" onClick={() => handleBook(f)}>Book</button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

