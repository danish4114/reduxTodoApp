import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import statusReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware()


let store = createStore(statusReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
