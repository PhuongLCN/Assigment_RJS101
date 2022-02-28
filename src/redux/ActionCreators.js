import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addStaff = (staffs) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staffs
})

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));
    return fetch(baseUrl + 'staffs')
    .then(response => response.json())
    .then(staffs => dispatch(addStaff(staffs)));
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});

export const addNewStaff = (name, doB, salaryScale, startDate, department,
    annualLeave, overTime, image) => ({
    type: ActionTypes.ADD_NEWSTAFF,
    payload: {
        name: name,
        doB: doB,
        salaryScale: salaryScale,
        startDate: startDate,
        department: department,
        annualLeave: annualLeave,
        overTime: overTime,
        image: image
    }
});
export const addDeparment = (depts) => ({
    type: ActionTypes.ADD_DEPARTMENT,
    payload: depts
})
export const fetchDepartment = () => (dispatch) => {
    dispatch(deptsLoading(true));
    return fetch(baseUrl + 'departments')
    .then(response => response.json())
    .then(depts => dispatch(addDeparment(depts)));
}
export const deptsLoading = () => ({
    type: ActionTypes.DEPARTMENT_LOADING
});

export const deptsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENT_FAILED,
    payload: errmess
});

export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary
})
export const fetchSalary = () => (dispatch) => {
    dispatch(salaryLoading(true));
    return fetch(baseUrl + 'staffsSalary')
    .then(response => response.json())
    .then(salary => dispatch(addSalary(salary)));
}
export const salaryLoading = () => ({
    type: ActionTypes.SALARY_LOADING
});

export const salaryFailed = (errmess) => ({
    type: ActionTypes.SALARY_FAILED,
    payload: errmess
});

