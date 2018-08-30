import { listTodo, targetNewValue, addNewValue } from "../redux/actions";
import { connect } from "react-redux";
import EditTodo from "../components/edittodo";

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
const EditContent = connect(
  mapStatusToProps,
  mapDispatchToProps
)(EditTodo);
export default EditContent;
