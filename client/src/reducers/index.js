import { combineReducers } from "redux";
import rentalReducer from "./rentalReducer";

export default combineReducers({
  rentals: rentalReducer
});
