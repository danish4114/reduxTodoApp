import React from "react";
import Redux from "react-redux";
import Todo from "./components";
import { completed, editTodo, deleteTodo, listTodo } from "./actions";
import { connect } from "react-redux";
import AddTodo from "./addTodo";

const mapStatusToProps = state => {
  return {
    content: state
  };
};
const mapDispatchToProps = dispatch => ({
  onChange: index => dispatch(completed(index)),
  onEdit: (newValue, index) => dispatch(editTodo(newValue, index)),
  onClick: index => dispatch(deleteTodo(index)),
  List: list => dispatch(listTodo(list))
});
const statusContent = connect(
  mapStatusToProps,
  mapDispatchToProps
)(Todo);
export default statusContent;
