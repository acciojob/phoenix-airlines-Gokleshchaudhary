import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main id="main">
      <h2>Welcome to Phoenix Airlines</h2>
      <p>Search and book flights easily.</p>
      <Link to="/flight-search"><button>Search Flights</button></Link>
    </main>
  );
}

