import { createActions } from "redux-actions";

export const { addTodo, completed, editTodo, deleteTodo,listTodo } = createActions({
  ADD_TODO: text => ({ text }),
  COMPLETED: id => ({ id }),
  EDIT_TODO: (newValue, index) => ({ newValue, index }),
  DELETE_TODO: index => ({ index }),
  LIST_TODO:list=>({list})
});
