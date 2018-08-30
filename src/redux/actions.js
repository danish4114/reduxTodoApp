import * as constants from "./constants";
import { createAction } from "redux-actions";

export const listTodo = createAction(constants.LIST_TODO);
export const ifSuccess = createAction(constants.IF_SUCCESS);
export const deleteTodo = createAction(constants.FOR_DELETE);
export const ifDelete = createAction(constants.DELETE_SUCCESS);
export const addTodo = createAction(constants.ADD_TODO);
export const ifAddtodo = createAction(constants.ADDTODO_SUCCESS);
export const forTarget = createAction(constants.FOR_TARGET);
export const foraddValue = createAction(constants.VALUE_TARGET);
export const isEmpty = createAction(constants.IS_EMPTY);
export const toggleTodo = createAction(constants.TOGGLE_TODO);
export const isToggle = createAction(constants.IS_TOGGLE);
export const targetNewValue = createAction(constants.NEW_VALUE);
export const addNewValue = createAction(constants.ADD_NEW_VALUE);
