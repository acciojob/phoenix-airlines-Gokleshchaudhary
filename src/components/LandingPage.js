import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Phoenix Airlines</h1>
      <Link to="/flight-search">
        <button>Book a Flight</button>
      </Link>
    </div>
  );
};

export default LandingPage;
