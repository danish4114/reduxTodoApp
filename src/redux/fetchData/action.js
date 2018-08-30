import { call, put } from "redux-saga/effects";
import * as actions from "../actions";
import AxiosServer from "../../axios";

export default function* fetchRequest(action) {
  try {
    const response = yield call(AxiosServer, "get");
    if (response) {
      yield put(actions.ifSuccess(response.data));
    }
  } catch (error) {
    console.log("error");
  }
}
