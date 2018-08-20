export const CHECKED = "COMPLETED";
export const ADD_TODO = "ADD_TODO";
export let itemID = 2;
export const EDITTODO = "EDITTODO";
export const DELETETODO = "DELETETODO";

export const status = index => {
  return {
    type: CHECKED,
    index
  };
};
export const addtodo = text => {
  return {
    type: ADD_TODO,
    id: itemID++,
    text
  };
};
export const edittodo = (newValue, index) => {
  return {
    type: EDITTODO,
    newValue,
    index
  };
};
export const deletetodo = index => {
  return {
    type: DELETETODO,
    index
  };
};
