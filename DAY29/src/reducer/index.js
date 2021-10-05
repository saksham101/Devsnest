import { combineReducers } from "redux";
import {
  placeNameReducer,
  locationWeatherReducer,
  loadingStatus,
  darkModeReducer,
} from "./weatherReducer";
const rootReducer = combineReducers({
  placeName: placeNameReducer,
  placeData: locationWeatherReducer,
  loading: loadingStatus,
  darkModeState: darkModeReducer,
});

export default rootReducer;
