import React from "react";
import Redux from "react-redux";
import Todo from "../components/listtodo";
 import {listTodo,ifSuccess,deleteTodo } from "../redux/actions";
import { connect } from "react-redux";

const mapStatusToProps = (state) => {
  return {
    sstate: state
  };
};
const mapDispatchToProps = dispatch => {
  // console.log(listTodo());
  return{
  getListTodo: () => dispatch(listTodo()),
  forSuccess:()=>dispatch(ifSuccess()),
  forDelete:(id)=>dispatch(deleteTodo(id))
}};
const statusContent = connect(
  mapStatusToProps,
  mapDispatchToProps
)(Todo);
export default statusContent;