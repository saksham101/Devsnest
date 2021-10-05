import React from "react";
import "./styles/search.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  changeDarkMode,
  findPlace,
  getLocationData,
  changeLoading,
} from "../actions/action";
const Search = () => {
  const placeName = useSelector((state) => state.placeName);
  const darkMode = useSelector((state) => state.darkModeState);
  const dispatch = useDispatch();
  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      dispatch(getLocationData(placeName));
      dispatch(findPlace(""));
      dispatch(changeLoading(true));
    }
  };
  return (
    <div className={darkMode ? "search-box dark-mode" : "search-box"}>
      <input
        type="text"
        id="input-place-name"
        value={placeName}
        placeholder="city name"
        onChange={(e) => {
          dispatch(findPlace(e.target.value));
        }}
        onKeyDown={handleEnterKey}
      />
      <button
        type="submit"
        onClick={() => {
          dispatch(getLocationData(placeName));
          dispatch(findPlace(""));
          dispatch(changeLoading(true));
        }}
        style={
          darkMode
            ? { color: "white", background: "grey" }
            : { color: "black", background: "white" }
        }
      >
        Find
      </button>
      <button
        onClick={() => {
          dispatch(changeDarkMode());
        }}
        style={
          darkMode
            ? { color: "white", background: "grey" }
            : { color: "black", background: "white" }
        }
      >
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};
export default Search;
