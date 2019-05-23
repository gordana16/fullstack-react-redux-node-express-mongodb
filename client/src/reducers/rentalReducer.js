import _ from "lodash";

import { FETCH_RENTALS, FETCH_RENTAL } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RENTALS: {
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    }

    case FETCH_RENTAL: {
      return { ...state, [action.payload._id]: action.payload };
    }

    default:
      return state;
  }
};
