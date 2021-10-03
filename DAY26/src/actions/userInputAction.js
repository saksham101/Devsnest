import { firstNameActionType, lastNameActionType } from "./inputActionType";
function firstNameInput(input) {
  return {
    type: firstNameActionType,
    payload: input,
  };
}
function lastNameInput(input) {
  return {
    type: lastNameActionType,
    payload: input,
  };
}

export { firstNameInput, lastNameInput };
