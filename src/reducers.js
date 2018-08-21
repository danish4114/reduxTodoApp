import { completed, addTodo, editTodo, deleteTodo } from "./actions";
import { handleActions } from "redux-actions";
import update from "immutability-helper";

const defaultState = [
  { id: 1, name: "abc", completed: false },
  { id: 2, name: "abc", completed: false }
];
const toggletodo = (defaultState, { payload: { id } }) =>
  update(defaultState, {
    $toggle: [(defaultState[id].completed = !defaultState[id].completed)]
  });

const EditTodo = (defaultState, { payload: { newValue, index } }) =>
  update(defaultState, {
    name: { $set: (defaultState[index].name = newValue) }
  });

let itemID = 3;
const Addtodo = (defaultState, { payload: { text } }) =>
  update(defaultState, {
    $push: [{ id: itemID++, name: text, completed: false }]
  });

const DeleteTodo = (defaultState, { payload: { index } }) =>
  update(defaultState, { $splice: [[index, 1]] });
const statusReducer = handleActions(
  {
    [completed]: toggletodo,
    [editTodo]: EditTodo,
    [addTodo]: Addtodo,
    [deleteTodo]: DeleteTodo
  },
  defaultState
);
export default statusReducer;
