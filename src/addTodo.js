import React from "react";
import { connect } from "react-redux";
import { completed } from "./actions";
import axios from "axios";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  inputChange = event => {
    this.setState({ value: event.target.value });
  };
  handleChange = event => {
    event.preventDefault();
    if (this.state.value == "") {
      alert("Please enter any todoname");
    } else {
      this.setState({ value: "" });
      axios.post("http://localhost:3000/todo", {
        name: this.state.value,
        completed: false
      });
    }
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleChange} method="POST">
          <input
            className="form-control"
            placeholder="AddTodo..."
            value={this.state.value}
            style={{ border: !this.state.value ? "1px solid red" : "" }}
            onChange={this.inputChange}
            type="text"
          />
          <button className="btn btn-primary" type="submit">
            AddItem
          </button>
        </form>
      </div>
    );
  }
}
export default AddTodo;
