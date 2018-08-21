import { completed, addTodo, editTodo, deleteTodo } from "./actions";
import { handleActions } from "redux-actions";
import _ from "lodash";

const defaultState = [
  { id: 1, name: "abc", completed: false },
  { id: 2, name: "abc", completed: false }
];
const toggletodo = (state = defaultState, { payload: { id } }) => {
  return _.map(state, (todo, index) => {
    if (index == id) {
      return Object.assign({}, todo, { completed: !todo.completed });
    }
    return todo;
  });
};
const EditTodo = (state = defaultState, { payload: { newValue, index } }) => {
  let clone = state;
  clone[index].name = newValue;
  return clone;
};
let itemID = 3;
const Addtodo = (state = defaultState, { payload: { text } }) => {
  return [
    ...state,
    {
      id: itemID++,
      name: text,
      completed: false
    }
  ];
};
const DeleteTodo = (state = defaultState, { payload: { index } }) => {
  let newCLone = _.clone(state).slice();
  newCLone.splice(index, 1);
  return newCLone;
};
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
