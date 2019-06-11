import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import rentalReducer from "./rentalReducer";
import authReducer from "./authReducer";

export default combineReducers({
  rentals: rentalReducer,
  form: formReducer,
  auth: authReducer
});
