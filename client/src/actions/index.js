import axios from "axios";
import { FETCH_RENTALS, FETCH_RENTAL } from "./types";

export const fetchRentals = () => dispatch =>
  axios
    .get("/api/v1/rentals")
    .then(response =>
      dispatch({ type: FETCH_RENTALS, payload: response.data })
    );

export const fetchRental = id => dispatch =>
  axios
    .get(`/api/v1/rentals/${id}`)
    .then(response => dispatch({ type: FETCH_RENTAL, payload: response.data }));
