import * as ActionTypes from './ActionTypes';
import { STAFFS } from "../shared/staffs";

export const addStaff = (staffs) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staffs
})

export const fetchStaffs = () => (dispatch) => {

    dispatch(staffsLoading(true));

    setTimeout(() => {
        dispatch(addStaff(STAFFS));
    }, 2000);
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});
