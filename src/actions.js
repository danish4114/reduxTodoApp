import { createActions } from "redux-actions";

export const { addTodo, completed, editTodo, deleteTodo } = createActions({
  ADD_TODO: text => ({ text }),
  COMPLETED: id => ({ id }),
  EDIT_TODO: (newValue, index) => ({ newValue, index }),
  DELETE_TODO: index => ({ index })
});
