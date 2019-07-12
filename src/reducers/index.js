import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import employeeFormReducer from './EmployeeFormReducer';
import employeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: authReducer,
    employeeForm: employeeFormReducer,
    employees: employeeReducer
});
