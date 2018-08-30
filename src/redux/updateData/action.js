import { call, put } from "redux-saga/effects";
import * as actions from "../actions";
import AxiosServer from "../../axios";

export default function* updateRequest(action) {
  try {
    const response = yield call(AxiosServer, "put", {
      name: action.payload.name,
      id:action.payload.id,
      completed:action.payload.completed
    });
    if (response) {
      yield put(actions.isToggle(response.data));
      yield put(actions.listTodo());
    }
  } catch (error) {
    console.log("error");
  }
}
