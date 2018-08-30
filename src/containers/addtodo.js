import { connect } from "react-redux";
import AddTodo from "../components/addtodo";
import { forTarget, addTodo, isEmpty } from "../redux/actions";
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
