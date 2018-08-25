import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import _ from "lodash";
import axios from "axios";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { afterFetch: [] };
  }
  editHandleChange = event => {
    event.preventDefault();
    if (this.props.match.path == "/edittodo") {
      this.setState({ value: event.target.value });
      this.props.onEdit(event.target.value, event.target.id);
    }
  };
  HandleChange = event => {
    this.props.onChange(event.target.id);
  };
  deleteHandle = event => {
    axios.delete(`http://localhost:3000/todo/${event.target.id}`);
  };
  componentWillMount() {
    axios.get("http://localhost:3000/todo").then(results => {
      this.setState({ afterFetch: results.data });
      this.props.List(this.state.afterFetch);
    });
  }
  render() {
    let result = _.map(this.props.content, (data, index) => {
      return (
        <div className="child" key={index}>
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
            id={data.id}
            onClick={this.deleteHandle}
            type="button"
          >
            Delete!
          </button>
          {data.completed && <span className="badge">completed</span>}
        </div>
      );
    });
    return <div className="container">{result}</div>;
  }
}
export default Todo;
