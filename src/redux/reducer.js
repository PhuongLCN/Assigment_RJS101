import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs"

export const initialState = {
    staffs: STAFFS, //create staffs = STAFFS import from staffs.jsx
    depts: DEPARTMENTS, //create depts = DEPARTMANET import from staffs.jsx
    
}
export const Reducer = (state = initialState, action) => {
    return state;
};