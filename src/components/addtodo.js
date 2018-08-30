import React from "react";
import { connect } from "react-redux";
import { forTarget, addTodo, isEmpty } from "../redux/actions";

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
function mapStateToProps(state) {
  return {
    value: state.addtodoReducer.value
  };
}
function mapDispatchToProps(dispatch) {
  return {
    targett: value => dispatch(forTarget(value)),
    AddTodo: value => dispatch(addTodo(value)),
    ForEmptyValue: () => dispatch(isEmpty())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
