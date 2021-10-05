import { locationData, searchLocation } from "../actions/actionName";
export const placeNameReducer = (state = "", action) => {
  switch (action.type) {
    case searchLocation:
      return action.payload;
    default:
      return state;
  }
};

export const locationWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case locationData:
      return action.payload;
    default:
      return state;
  }
};

export const loadingStatus = (state = false, action) => {
  if (action.type === "LOADING_STATUS") return action.payload;
  else return state;
};

export const darkModeReducer = (state = false, action) => {
  if (action.type === "DARK_MODE") return !state;
  else return state;
};
