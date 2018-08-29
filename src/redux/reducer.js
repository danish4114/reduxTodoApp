import { combineReducers } from "redux";
import listReducer from "./fetchData/reducer";
import deleteReducer from './deleteData/reducer'

const makeRootReducer = combineReducers({
    listReducer: listReducer,
    deleteReducer:deleteReducer
  });
export default makeRootReducer;
