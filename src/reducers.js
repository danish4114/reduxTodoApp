import { completed, addTodo, editTodo, deleteTodo, listTodo } from "./actions";
import { handleActions } from "redux-actions";
import update from "immutability-helper";

const defaultState = [];
const ListTodo = (state, { payload: { list } }) =>
  update(state, { $set: list });

// const EditTodo = (state, { payload: { newValue, index } }) =>
//   update(state, {
//     name: { $set: (state[index].name = newValue) }
//   });
const statusReducer = handleActions(
  {
    // [editTodo]: EditTodo,
    [listTodo]: ListTodo
  },
  defaultState
);
export default statusReducer;
