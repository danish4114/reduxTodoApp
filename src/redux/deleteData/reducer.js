import { handleActions } from "redux-actions";
import * as constants from "../constants";
import update from "immutability-helper";

const initialState = {
  data: {},
  isSuccess: false,
  message: ""
};
const deleteSuccess = (state, action) => {
  return update(state, {
    isSuccess: { $set: false },
    message: { $set: "fetch success" }
  });
};
const forSuccessDelete = (state, action) => {
  return update(state, {
    data: { $set: action.payload },
    isSuccess: { $set: true }
  });
};
export default handleActions(
  {
    [constants.FOR_DELETE]: deleteSuccess,
    [constants.DELETE_SUCCESS]: forSuccessDelete
  },
  initialState
);
