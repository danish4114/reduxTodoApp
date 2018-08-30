import { takeLatest } from "redux-saga/effects";
import * as constants from "./constants";
import fetchRequest from "./fetchData/action";
import deleteRequest from "./deleteData/action";
import addtodoRequest from "./addTodo/action";
import updateRequest from "./updateData/action";

export function* fetchActions() {
  yield takeLatest(constants.LIST_TODO, fetchRequest);
  yield takeLatest(constants.FOR_DELETE, deleteRequest);
  yield takeLatest(constants.ADD_TODO, addtodoRequest);
  yield takeLatest(constants.TOGGLE_TODO, updateRequest);
  yield takeLatest(constants.ADD_NEW_VALUE, updateRequest);
}
export default function* rootSaga() {
  yield [fetchActions()];
}
