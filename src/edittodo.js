import React from "react";
import _ from "lodash";
import axios from "axios";
import {
  BrowserRouter as Redirect,
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AxiosServer from "./axios";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  targetHandler = event => {
    this.props.Isvalue(this.props.index, event.target.value);
  };
  editHandleChange = event => {
    event.preventDefault();
    if (
      !this.props.clone[this.props.index].name == "" &&
      this.props.history.location.pathname == "/edittodo"
    ) {
      AxiosServer("put", {
        name: this.props.clone[this.props.index].name,
        i: this.props.id,
        completed: this.props.completed
      }).then(() => {
        this.props.history.push("/listtodo");
      });
    } else {
      alert("item list can't be empty");
    }
  };
  render() {
    return (
      <div className="container">
        <div>
          <form onSubmit={this.editHandleChange}>
            <input
              value={this.props.clone[this.props.index].name}
              className="form-control"
              onChange={this.targetHandler}
              type="text"
            />
            <button className="btn btn-success" type="submit">
              Update Item!
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default EditTodo;
