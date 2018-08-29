import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import AddTodo from "../containers/addtodo";
import Todo from "../containers/listtodo";

class LinkTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/listtodo">ListTodo</Link>
            </li>
            <li>
              <Link to="/addtodo">AddTodo</Link>
            </li>
            <li>
              <Link to="/edittodo">EditTodo</Link>
            </li>
          </ul>
          <Route exact path="/listtodo" component={Todo} />
          <Route path="/addtodo" component={AddTodo} />
          <Route path="/edittodo" component={Todo} />
        </div>
      </Router>
    );
  }
}
export default LinkTodo;