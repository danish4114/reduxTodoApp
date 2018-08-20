import Redux from "react-redux";
import { CHECKED, ADD_TODO, itemID, EDITTODO, DELETETODO } from "./actions";
import { combineReducers } from "redux";
import _ from "lodash";

const initialState = [
  { id: 1, name: "abc", completed: false },
  { id: 2, name: "abc", completed: false }
];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: itemID,
          name: action.text,
          completed: false
        }
      ];
    case EDITTODO:
      let clone = _.clone(state);
      clone[action.index].name = action.newValue;
      return clone;

    case DELETETODO:
      let newCLone = _.clone(state).slice();
      newCLone.splice(action.index, 1);
      return newCLone;

    case CHECKED:
      return state.map((todo, index) => {
        if (index == action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
};
const statusReducer = combineReducers({
  todoReducer
});
export default statusReducer;
