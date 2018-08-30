import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import EditTodo from "../containers/edittodo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  HandleChange = event => {
    if (this.props.history.location.pathname == "/edittodo") {
      let name = event.target.name;
      let id = event.target.id;
      let completed = event.target.checked;
      this.props.toggletoDo({ name, id, completed });
    }
  };
  deleteHandle = event => {
    if (this.props.history.location.pathname == "/edittodo") {
      try {
        this.props.forDelete({ id: event.target.id });
        this.props.getListTodo();
      } catch (error) {}
    }
  };
  componentWillMount() {
    this.props.getListTodo();
  }
  render() {
    let result = _.map(this.props.sstate.listReducer.data, (data, index) => {
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
