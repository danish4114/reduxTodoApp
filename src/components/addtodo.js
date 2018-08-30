import React from "react";
import { connect } from "react-redux";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  inputChange = event => {
    this.props.targett(event.target.value);
  };
  handleChange = event => {
    event.preventDefault();
    this.props.AddTodo(this.props.value);
    this.props.ForEmptyValue();
    this.props.history.push("/listtodo");
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
export default AddTodo;
