import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import _ from "lodash";
import axios from "axios";
import EditTodo from "./editContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AxiosServer from "./axios";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  HandleChange = event => {
    if (this.props.history.location.pathname == "/edittodo") {
      const i = event.target.id;
      const j = event.target.checked;
      try {
        AxiosServer("put", {
          name: event.target.name,
          completed: j,
          i: i
        }).then(() => {
          AxiosServer("get").then(result => {
            this.props.List(result.data);
          });
        });
      } catch (error) {}
    }
  };
  deleteHandle = event => {
    if (this.props.history.location.pathname == "/edittodo") {
      try {
        AxiosServer("delete", { id: event.target.id }).then(() => {
          AxiosServer("get").then(result => {
            this.props.List(result.data);
          });
        });
      } catch (error) {}
    }
  };
  componentWillMount() {
    AxiosServer("get").then(result => {
      this.props.List(result.data);
    });
  }
  render() {
    let result = _.map(this.props.afterFetch, (data, index) => {
      return (
        <div className="child" key={index}>
          <input
            type="checkbox"
            checked={data.completed}
            name={data.name}
            id={data.id}
            onChange={this.HandleChange}
          />
          <label>
            <Router>
              <div>
                <Link to="/edithere">{data.name}</Link>
                <Route
                  path="/edithere"
                  component={() => {
                    return (
                      <EditTodo
                        history={this.props.history}
                        index={index}
                        completed={data.completed}
                        id={data.id}
                        enteredValue={data.name}
                      />
                    );
                  }}
                />
              </div>
            </Router>
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
