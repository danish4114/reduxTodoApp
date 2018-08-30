import React from "react";
import Redux from "react-redux";
import Todo from "../components/listtodo";
import {
  listTodo,
  ifSuccess,
  deleteTodo,
  toggleTodo,
  forDataClone
} from "../redux/actions";
import { connect } from "react-redux";

const mapStatusToProps = state => {
  return {
    sstate: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getListTodo: () => dispatch(listTodo()),
    forSuccess: () => dispatch(ifSuccess()),
    forDelete: id => dispatch(deleteTodo(id)),
    toggletoDo: (name, id, completed) =>
      dispatch(toggleTodo(name, id, completed))
  };
};
const statusContent = connect(
  mapStatusToProps,
  mapDispatchToProps
)(Todo);
export default statusContent;
