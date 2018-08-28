import { listTodo,forTarget,isFocused,isValue } from "./actions";
import { connect } from "react-redux";
import EditTodo from "./edittodo";

const mapStatusToProps = state => {
  return {
    content: state,
    value:state.value,
    newValue:state.newValue,
    clone:state.clone
  };
};
const mapDispatchToProps = dispatch => {
return{
  List: list => dispatch(listTodo(list)),
  Value:(value)=>dispatch(forTarget(value)),
  Isvalue:(index,value)=>dispatch(isValue(index,value)),
  Focused:(index,value)=>dispatch(isFocused(index,value))
}};
const EditContent = connect(
  mapStatusToProps,
  mapDispatchToProps
)(EditTodo);
export default EditContent;
