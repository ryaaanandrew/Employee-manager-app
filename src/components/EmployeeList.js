import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
 
class EmployeeList extends Component {
    componentDidMount() {
        this.props.employeesFetch({ employee: this.props.employee });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.employees.length !== this.props.employees.length) {
            this.props.employeesFetch();
        }
    }
 
    render() {
        return (
            <FlatList 
                data={this.props.employees} 
                renderItem={(employee) => <ListItem employee={employee.item} />} 
                keyExtractor={item => item.uid}
            />
        );
    }
}
 
const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};
 
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
