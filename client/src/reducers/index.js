import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { rentalsReducer, singleRentalReducer } from "./rentalReducer";
import authReducer from "./authReducer";

export default combineReducers({
  rentals: rentalsReducer,
  rental: singleRentalReducer,
  form: formReducer,
  auth: authReducer
});
