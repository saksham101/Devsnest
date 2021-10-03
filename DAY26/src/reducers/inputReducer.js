const initial = {
  firstName: "",
  lastName: "",
};
export const InputReducer = (state = initial, action) => {
  switch (action.type) {
    case "FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "LAST_NAME":
      return { ...state, lastName: action.payload };
    default:
      return state;
  }
};
