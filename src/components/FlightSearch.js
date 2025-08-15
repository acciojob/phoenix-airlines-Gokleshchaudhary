import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const FlightSearch = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [tripType, setTripType] = useState("one-way");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    if (source && destination && date) {
      dispatch({
        type: "SET_FLIGHT_DETAILS",
        payload: { tripType, source, destination, date },
      });
      history.push("/flight-booking");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <label>
        <input
          type="radio"
          value="one-way"
          checked={tripType === "one-way"}
          onChange={() => setTripType("one-way")}
        />{" "}
        One-way
      </label>
      <label>
        <input
          type="radio"
          value="round-trip"
          checked={tripType === "round-trip"}
          onChange={() => setTripType("round-trip")}
        />{" "}
        Round-trip
      </label>
      <br />
      <input
        type="text"
        placeholder="Source City"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination City"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="book-flight" onClick={handleSearch}>
        Search Flights
      </button>
    </div>
  );
};

export default FlightSearch;
