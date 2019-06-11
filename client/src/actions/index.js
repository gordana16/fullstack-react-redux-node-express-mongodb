import axios from "axios";
import authService from "../services/authService";
import axiosService from "../services/axiosService";
import {
  FETCH_RENTALS,
  FETCH_RENTAL,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "./types";

const axiosInstance = axiosService.getInstance();

//rental actions
export const fetchRentals = () => dispatch =>
  axiosInstance
    .get("/rentals")
    .then(response =>
      dispatch({ type: FETCH_RENTALS, payload: response.data })
    );

export const fetchRental = id => dispatch =>
  axiosInstance
    .get(`/rentals/${id}`)
    .then(response => dispatch({ type: FETCH_RENTAL, payload: response.data }));

//auth actions
export const register = userData => {
  return axios
    .post("/api/v1/users/register", { ...userData })
    .then(res => res.data, err => Promise.reject(err.response.data.errors));
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
};

export const loginFailure = errors => {
  return {
    type: LOGIN_FAILURE,
    errors
  };
};

export const checkAuthStatus = () => {
  return dispatch => {
    if (authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  };
};

export const login = userData => {
  return dispatch => {
    return axios
      .post("/api/v1/users/auth", { ...userData })
      .then(res => res.data)
      .then(token => {
        authService.saveToken(token);
        dispatch(loginSuccess());
      })
      .catch(({ response }) => dispatch(loginFailure(response.data.errors)));
  };
};

export const logout = () => {
  authService.invalidateUser();
  return {
    type: LOGOUT
  };
};
