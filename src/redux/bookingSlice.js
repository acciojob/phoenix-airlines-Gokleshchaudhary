const initialState = {
  tripType: "",
  source: "",
  destination: "",
  date: "",
  name: "",
  email: "",
  phone: "",
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FLIGHT_DETAILS":
      return { ...state, ...action.payload };
    case "SET_PASSENGER_DETAILS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default bookingReducer;
