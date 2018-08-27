import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import _ from "lodash";
import axios from "axios";
import EditTodo from "./editContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { afterFetch: [], isClicked: false };
  }
  HandleChange = event => {
    if (this.props.history.location.pathname == "/edittodo") {
      const i = event.target.id;
      const j = event.target.checked;
      axios
        .put(`http://localhost:3000/todo/${i}`, {
          name: event.target.name,
          id: event.target.id,
          completed: j
        })
        .then(results => {
          axios.get("http://localhost:3000/todo").then(results => {
            this.setState({ afterFetch: results.data });
            this.props.List(this.state.afterFetch);
          });
          this.setState({ afterFetch: results.data });
        });
    }
  };
  deleteHandle = event => {
    if (this.props.history.location.pathname == "/edittodo") {
      axios.delete(`http://localhost:3000/todo/${event.target.id}`).then(() => {
        axios.get("http://localhost:3000/todo").then(results => {
          this.setState({ afterFetch: results.data });
          this.props.List(this.state.afterFetch);
        });
      });
    }
  };
  componentWillMount() {
    axios.get("http://localhost:3000/todo").then(results => {
      this.setState({ afterFetch: results.data });
      this.props.List(this.state.afterFetch);
    });
  }
  edit = () => {
    this.setState({ isClicked: true });
  };
  render() {
    let result = _.map(this.props.content, (data, index) => {
      return (
        <div
          className="child"
          style={{ marginBottom: this.state.isClicked ? "30px" : "0px" }}
          key={index}
        >
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
                <Link to="/edithere" onClick={this.edit}>
                  {data.name}
                </Link>
                <Route
                  path="/edithere"
                  component={() => {
                    return (
                      <EditTodo
                        history={this.props.history}
                        index={index}
                        completed={data.completed}
                        id={data.id}
                        value={data.name}
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
