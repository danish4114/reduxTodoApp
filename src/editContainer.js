import { listTodo } from "./actions";
import { connect } from "react-redux";
import EditTodo from "./edittodo";

const mapStatusToProps = state => {
  return {
    content: state
  };
};
const mapDispatchToProps = dispatch => ({
  List: list => dispatch(listTodo(list))
});
const EditContent = connect(
  mapStatusToProps,
  mapDispatchToProps
)(EditTodo);
export default EditContent;
