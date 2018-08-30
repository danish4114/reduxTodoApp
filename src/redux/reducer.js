import { combineReducers } from "redux";
import listReducer from "./fetchData/reducer";
import deleteReducer from "./deleteData/reducer";
import addtodoReducer from "./addTodo/reducer";
import updateReducer from "./updateData/reducer";

const makeRootReducer = combineReducers({
  listReducer: listReducer,
  deleteReducer: deleteReducer,
  addtodoReducer: addtodoReducer,
  updateReducer: updateReducer
});
export default makeRootReducer;
