import { listTodo, forTarget, isEmpty, isValue } from "./actions";
import { handleActions } from "redux-actions";
import update from "immutability-helper";

const defaultState = {
  value: "",
  afterFetch: [],
  clone: [],
  newValue: ""
};
const ListTodo = (state = defaultState, { payload: { list } }) =>
  update(state, {
    afterFetch: { $set: list },
    clone: { $set: list }
  });

const ForTargett = (state = defaultState, { payload: { value } }) =>
  update(state, {
    value: { $set: value }
  });

const IsEmpty = (state = defaultState, { payload: { value } }) =>
  update(state, {
    value: { $set: "" }
  });

const IsValue = (state = defaultState, { payload: { index, value } }) =>
  update(state, { clone: { [index]: { name: { $set: value } } } });

const statusReducer = handleActions(
  {
    [listTodo]: ListTodo,
    [forTarget]: ForTargett,
    [isEmpty]: IsEmpty,
    [isValue]: IsValue
  },
  defaultState
);
export default statusReducer;
