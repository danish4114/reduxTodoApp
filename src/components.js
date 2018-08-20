import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import AddTodo from "./addTodo";
import _ from "lodash";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  editHandleChange = event => {
    this.props.onEdit(event.target.value, event.target.id);
  };
  HandleChange = event => {
    this.props.onChange(event.target.id);
  };
  deleteHandle = event => {
    this.props.onClick(event.target.id);
  };
  render() {
    const result = _.map(this.props.todo, (data, index) => {
      return (
        <div className="child" key={data.id}>
          <input
            type="checkbox"
            checked={data.completed}
            id={index}
            onChange={this.HandleChange}
          />
          <label>
            <input
              className="forEdit"
              id={index}
              type="text"
              onChange={this.editHandleChange}
              value={data.name}
            />
          </label>
          <button
            className="btn-xsm btn-danger"
            id={index}
            onClick={this.deleteHandle}
            type="button"
          >
            Delete!
          </button>
          {data.completed && <span className="badge">completed</span>}
        </div>
      );
    });
    return (
      <div className="container">
        {result}
        <AddTodo />
      </div>
    );
  }
}
export default Todo;
