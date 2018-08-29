import React from "react";
import _ from "lodash";
import {
  BrowserRouter as Redirect,
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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