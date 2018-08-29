import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/sagas'
import makeRootReducer from './redux/reducer'

const sagaMiddleware = createSagaMiddleware()
let store = createStore(makeRootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
