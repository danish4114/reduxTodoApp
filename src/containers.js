import React from "react";
import Redux from "react-redux";
import Todo from "./components";
import {isFocused, listTodo } from "./actions";
import { connect } from "react-redux";

const mapStatusToProps = (state) => {
  return {
    afterFetch:state.afterFetch,
  };
};
const mapDispatchToProps = dispatch => {
  return{
  List: list => dispatch(listTodo(list)),
  Focused:(index,value,completed)=>dispatch(isFocused(index,value,completed))
}};
const statusContent = connect(
  mapStatusToProps,
  mapDispatchToProps
)(Todo);
export default statusContent;
