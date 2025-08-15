const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Mock flight data
const flights = [
  { id: 1, from: "Delhi", to: "Mumbai", date: "2025-08-20", price: 5000 },
  { id: 2, from: "Mumbai", to: "Delhi", date: "2025-08-21", price: 5200 },
];

// Search flights
app.post("/api/search", (req, res) => {
  const { from, to, date } = req.body;
  const results = flights.filter(
    (f) =>
      f.from.toLowerCase() === from.toLowerCase() &&
      f.to.toLowerCase() === to.toLowerCase() &&
      f.date === date
  );
  res.json(results);
});

// Book flight
app.post("/api/book", (req, res) => {
  res.json({ success: true, bookingId: Date.now() });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
