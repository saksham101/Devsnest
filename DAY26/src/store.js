import { InputReducer } from "./reducers/inputReducer";
import { createStore } from "redux";

const store = createStore(InputReducer);
export default store;
