import { handleActions } from "redux-actions";
import * as constants from "../constants";
import update from "immutability-helper";

const initialState = {
  value: "",
  isSuccess: false
};
const addTodoSuccess = (state, action) => {
  return update(state, {
    isSuccess: { $set: false }
  });
};
const forAddTodoSuccess = (state, action) => {
  return update(state, {
    data: { $set: action.payload },
    isSuccess: { $set: true }
  });
};
const tarGet = (state, action) => {
  return update(state, {
    value: { $set: action.payload },
    isSuccess: { $set: true }
  });
};
const EmptyVAlue = (state, action) => {
  return update(state, {
    value: { $set: "" },
    isSuccess: { $set: true }
  });
};

export default handleActions(
  {
    [constants.ADD_TODO]: addTodoSuccess,
    [constants.ADDTODO_SUCCESS]: forAddTodoSuccess,
    [constants.FOR_TARGET]: tarGet,
    [constants.IS_EMPTY]: EmptyVAlue
  },
  initialState
);
