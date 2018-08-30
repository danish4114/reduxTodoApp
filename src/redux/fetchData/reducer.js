import { handleActions } from "redux-actions";
import * as constants from "../constants";
import update from "immutability-helper";

const initialState = {
  data: {},
  isSuccess: false,
  message: "",
  clone: {}
};
const fetchSuccess = (state, action) => {
  return update(state, {
    message: { $set: "fetch success" }
  });
};
const forSuccess = (state, action) =>
  update(state, {
    data: { $set: action.payload },
    clone: { $set: action.payload },
    isSuccess: { $set: true }
  });
const targetEditValue = (state, action) => {
  return update(state, {
    clone: { [action.payload.index]: { name: { $set: action.payload.value } } }
  });
};
const addnewValue = (state, action) => {
  return update(state, {
    clone: { $set: action.payload },
    data: { $set: action.payload },
    isSuccess: { $set: true }
  });
};
export default handleActions(
  {
    [constants.LIST_TODO]: fetchSuccess,
    [constants.IF_SUCCESS]: forSuccess,
    [constants.NEW_VALUE]: targetEditValue,
    [constants.ADD_NEW_VALUE]: addnewValue
  },
  initialState
);
