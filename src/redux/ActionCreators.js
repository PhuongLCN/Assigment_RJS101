import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addStaff = (staffs) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staffs
})
export const fetchStaffs = () => (dispatch) => {
    return fetch(baseUrl + 'staffs')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(staffs => dispatch(addStaff(staffs)));
}
export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});

export const postNewStaff = (name, doB, salaryScale, startDate, departmentId,
    annualLeave, overTime, image) => (dispatch) => {
        const newStaff = {
            name: name,
            doB: doB,
            salaryScale: salaryScale,
            startDate: startDate,
            departmentId: departmentId,
            annualLeave: annualLeave,
            overTime: overTime,
            image: image
        };
        return fetch(baseUrl + 'staffs', {
            method: "POST",
            body: JSON.stringify(newStaff),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    throw error;
                })
            .then(response => response.json())
            .then(response => dispatch(addStaff(response)));
    };
    export const deleteStaff = (id) => (dispatch)=>{
        const staffId = {
            id: id
        }
        return fetch(baseUrl + 'staffs/'+id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    throw error;
                 })
            .then(response => response.json())
            .then(response => dispatch(fetchStaffs()));
    }
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
