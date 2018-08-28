import React from "react";
import { connect } from "react-redux";
import { completed, forTarget, isEmpty } from "./actions";
import axios from "axios";
import AxiosServer from "./axios";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  inputChange = event => {
    this.props.Target(event.target.value);
  };
  handleChange = event => {
    event.preventDefault();
    if (this.props.value == "") {
      alert("Please enter any todoname");
    } else {
      this.props.IsEmpty();
      AxiosServer("postt", {
        name: this.props.value,
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
            value={this.props.value}
            style={{ border: !this.props.value ? "1px solid red" : "" }}
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
function mapStateToProps(state) {
  return {
    value: state.value,
    id: state.id
  };
}
function mapDispatchToProps(dispatch) {
  return {
    Target: (value, index) => dispatch(forTarget(value, index)),
    IsEmpty: value => dispatch(isEmpty(value))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
