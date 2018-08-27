import React from "react";
import Redux from "react-redux";
import Todo from "./components";
import { completed, editTodo, deleteTodo, listTodo } from "./actions";
import { connect } from "react-redux";

const mapStatusToProps = state => {
  return {
    content: state
  };
};
const mapDispatchToProps = dispatch => ({
  List: list => dispatch(listTodo(list))
});
const statusContent = connect(
  mapStatusToProps,
  mapDispatchToProps
)(Todo);
export default statusContent;
