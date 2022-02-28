import * as ActionTypes from './ActionTypes';

export const Depts = (state = {
    isLoading: true,
    errMess: null,
    depts: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DEPARTMENT:
            return { ...state, isLoading: false, errMess: null, depts: action.payload };           
        default:
            return state;
    }
};