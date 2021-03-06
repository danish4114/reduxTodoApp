import React from "react";
import _ from "lodash";
import { listTodo, targetNewValue, addNewValue } from "../redux/actions";
import { connect } from "react-redux";
import {
  BrowserRouter as Redirect,
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  targetHandler = event => {
    event.preventDefault();
    if (this.props.history.location.pathname == "/edittodo") {
      event.preventDefault();
      let value = event.target.value;
      let index = this.props.index;
      this.props.targetValue({ value, index });
    }
  };
  editHandleChange = event => {
    event.preventDefault();
    if (!this.props.clone[this.props.index].name == "") {
      let name = this.props.clone[this.props.index].name;
      let id = this.props.id;
      let completed = this.props.completed;
      this.props.addnewValue({ name, id, completed });
      this.props.history.push("/listtodo");
    } else {
      alert("todo can't be empty");
    }
  };
  render() {
    const value = this.props.clone[this.props.index].name;
    return (
      <div className="container">
        <div>
          <form onSubmit={this.editHandleChange}>
            <input
              value={value}
              className="form-control"
              key={this.props.index}
              onChange={this.targetHandler}
              type="text"
            />
            <button className="btn btn-success" type="submit">
              Update Item!
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStatusToProps = state => {
  return {
    clone: state.listReducer.clone
  };
};
const mapDispatchToProps = dispatch => ({
  List: list => dispatch(listTodo(list)),
  targetValue: (value, index) => dispatch(targetNewValue(value, index)),
  addnewValue: (name, id, completed) =>
    dispatch(addNewValue(name, id, completed))
});
export default connect(
  mapStatusToProps,
  mapDispatchToProps
)(EditTodo);
