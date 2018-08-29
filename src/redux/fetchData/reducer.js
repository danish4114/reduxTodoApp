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
const fetchSuccess = (state, action) => {
//   console.log(state);
  return update(state, {
    isLoggedIn: { $set: true },
    isError: { $set: false },
    isSuccess: { $set: false },
    message: { $set: "fetch success" }
  });
};
const forSuccess = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    isSuccess: { $set: true }
  });

export default handleActions(
  {
    [constants.LIST_TODO]: fetchSuccess,
    [constants.IF_SUCCESS]: forSuccess
  },
  initialState
);
