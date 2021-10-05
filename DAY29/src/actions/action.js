import { searchLocation, locationData } from "./actionName";
const findPlace = (input) => {
  return {
    type: searchLocation,
    payload: input,
  };
};

const getLocationData = (data) => {
  console.log(data);
  return (dispatch) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=4a81f48477fc4799a9290936212907&q=${data}`;

    fetch(url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("wrong query");
        }
        return response.json();
      })
      .then((res) => {
        return dispatch({
          type: locationData,
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
        return dispatch({
          type: locationData,
          payload: err.message,
        });
      });
  };
};

const changeLoading = (load) => {
  return {
    type: "LOADING_STATUS",
    payload: load,
  };
};

const changeDarkMode = () => {
  return {
    type: "DARK_MODE",
  };
};
export { findPlace, getLocationData, changeLoading, changeDarkMode };
