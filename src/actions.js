import { createActions } from "redux-actions";
export const {listTodo,forTarget,foraddValue,isEmpty,isValue,isFocused} = createActions({
  LIST_TODO:list=>({list}),
  FOR_TARGET:(value,index)=>({value,index}),
  VALUE_TARGET:(value)=>({value}),
  IS_EMPTY:(result)=>({result}),
  IS_VALUE:(index,value)=>({index,value}),
  IS_FOCUSED:(index,value)=>({index,value}),
});
