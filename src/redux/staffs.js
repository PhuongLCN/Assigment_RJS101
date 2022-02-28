import * as ActionTypes from './ActionTypes';

export const Staffs = (state = {
    isLoading: true,
    errMess: null,
    staffs: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFF:
            return { ...state, isLoading: false, errMess: null, staffs: action.payload };
        case ActionTypes.STAFFS_LOADING:
            return { ...state, isLoading: true, errMess: null, staffs: [] }
        case ActionTypes.STAFFS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        case ActionTypes.ADD_NEWSTAFF:
            var staffs = action.payload;
            staffs.id = state.staffs.length;
            console.log(staffs);
            return {...state, staffs: state.staffs.concat(staffs)};
        default:
            return state;
    }
};