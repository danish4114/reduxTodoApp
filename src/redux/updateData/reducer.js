import { handleActions } from "redux-actions";
import * as constants from "../constants";
import update from "immutability-helper";

const initialState = {
  data: {},
  isFetch: false,
  isError: false,
  isSuccess: false,
  message: ""
};
const toggleTodo = (state, action) => {
  return update(state, {
    isLoggedIn: { $set: true },
    isError: { $set: false },
    isSuccess: { $set: false },
    message: { $set: "fetch success" }
  });
};
const forToggleSuccess = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    clone: { $set: action.payload }
  });
export default handleActions(
  {
    [constants.TOGGLE_TODO]: toggleTodo,
    [constants.IS_TOGGLE]: forToggleSuccess
  },
  initialState
);
