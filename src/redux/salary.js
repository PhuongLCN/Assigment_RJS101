import * as ActionTypes from './ActionTypes';

export const Salary = (state = {
    isLoading: true,
    errMess: null,
    salary: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SALARY:
            return { ...state, isLoading: false, errMess: null, salary: action.payload };
        case ActionTypes.SALARY_LOADING:
            return { ...state, isLoading: true, errMess: null, salary: [] }
        default:
            return state;
    }
};