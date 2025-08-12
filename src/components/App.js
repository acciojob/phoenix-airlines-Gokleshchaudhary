import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import FlightSearch from './pages/FlightSearch';
import FlightBooking from './pages/FlightBooking';
import Confirmation from './pages/Confirmation';

export default function App() {
  return (
    <div className="app">
      <header>
        <Link to="/"><h1>Phoenix Airlines</h1></Link>
      </header>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/flight-search" element={<FlightSearch />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}
