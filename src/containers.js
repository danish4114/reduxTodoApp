import React from "react";
import Redux from "react-redux";
import Todo from "./components";
import { status, edittodo, deletetodo } from "./actions";
import { connect } from "react-redux";
import AddTodo from "./addTodo";

const mapStatusToProps = todo => {
  return {
    status: todo.todoReducer.completed,
    todo: todo.todoReducer
  };
};
const mapDispatchToProps = dispatch => ({
  onChange: index => dispatch(status(index)),
  onEdit: (newValue, index) => dispatch(edittodo(newValue, index)),
  onClick: index => dispatch(deletetodo(index))
});
const statusContent = connect(
  mapStatusToProps,
  mapDispatchToProps
)(Todo);
export default statusContent;
