import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import _ from "lodash";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  editHandleChange = event => {
    event.preventDefault();
    if(this.props.match.path=='/edittodo'){
      this.setState({ value: event.target.value });
    this.props.onEdit(event.target.value, event.target.id);
    }
  };
  HandleChange = event => {
    this.props.onChange(event.target.id);
  };
  deleteHandle = event => {
    this.props.onClick(event.target.id);
  };
  render() {
    const result = _.map(this.props.content, (data, index) => {
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
      </div>
    );
  }
}
export default Todo;
