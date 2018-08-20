import React from "react";
import { connect } from "react-redux";
import { addtodo } from "./actions";

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
      this.props.onChange(this.state.value);
      this.setState({ value: "" });
    }
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleChange}>
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
const mapStateToProps = state => ({});
const mapDisptachToProps = dispatch => ({
  onChange: text => dispatch(addtodo(text))
});

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(AddTodo);
