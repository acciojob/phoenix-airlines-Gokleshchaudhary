import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Landing from "./Landing";
import FlightSearch from './components/FlightSearch';
import FlightBooking from './components/FlightBooking';
import Confirmation from './components/Confirmation';

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
