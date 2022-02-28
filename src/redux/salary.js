import * as ActionTypes from './ActionTypes';

export const Salary = (state = {
    isLoading: true,
    errMess: null,
    salary: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SALARY:
            return { ...state, isLoading: false, errMess: null, salary: action.payload };                
        default:
            return state;
    }
};