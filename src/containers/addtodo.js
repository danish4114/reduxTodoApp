import {connect} from 'react-redux'
import AddTodo from '../components/addtodo'
function mapStateToProps(state) {
    return {
      value: state.value,
      id: state.id
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddTodo);