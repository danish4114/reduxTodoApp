import { completed, addTodo, editTodo, deleteTodo, listTodo } from "./actions";
import { handleActions } from "redux-actions";
import update from "immutability-helper";

const defaultState = [];
const ListTodo = (state, { payload: { list } }) => {
  return update(state, {$set: list });
};

const toggleTodo = (state, { payload: { id } }) =>
  update(state, {
    $toggle: [(state[id].completed = !state[id].completed)]
  });

const EditTodo = (state, { payload: { newValue, index } }) =>
  update(state, {
    name: { $set: (state[index].name = newValue) }
  });

const DeleteTodo = (state, { payload: { index } }) =>
  update(state, { $splice: [[index, 1]] });


const statusReducer = handleActions(
  {
    [completed]: toggleTodo,
    [editTodo]: EditTodo,
    [deleteTodo]: DeleteTodo,
    [listTodo]: ListTodo
  },
  defaultState
);
export default statusReducer;
