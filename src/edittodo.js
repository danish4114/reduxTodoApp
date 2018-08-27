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

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: this.props.content, value: "" };
  }
  componentWillMount() {
    this.setState({ value: this.props.value });
  }
  targetHandler = event => {
    if (this.props.history.location.pathname == "/edittodo") {
      this.setState({ value: event.target.value });
      let clone = this.state.state;
      clone[this.props.index].name = event.target.value;
      this.setState({ state: clone });
    }
  };
  editHandleChange = event => {
    event.preventDefault();
    if (
      !this.state.value == "" &&
      this.props.history.location.pathname == "/edittodo"
    ) {
      axios
        .put(`http://localhost:3000/todo/${this.props.id}`, {
          name: this.state.value,
          id: this.props.id,
          completed: this.props.completed
        })
        .then(results => {
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
              value={this.state.value}
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
