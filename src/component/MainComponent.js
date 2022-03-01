import React, { Component } from 'react';
import Stafflist from "./Stafflist";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Staffdetail from './Staffdetail';
import DepartmentDetail from './Departmentdetail';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Deparment from './Department';
import Salary from './Salary';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { fetchDepartment, fetchStaffs, postNewStaff, fetchSalary } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        depts: state.depts,
        salary: state.salary
    }
}
const mapDispatchToProps = dispatch => ({
    postNewStaff: (name, doB, salaryScale, startDate,
        department, annualLeave, overTime, image) => dispatch(postNewStaff(name, doB, salaryScale,
            startDate, department, annualLeave, overTime, image)),
    fetchStaffs: () => { dispatch(fetchStaffs()) },
    fetchDepartment: () => { dispatch(fetchDepartment()) },
    fetchSalary: () => { dispatch(fetchSalary()) }
});
class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartment();
        this.props.fetchSalary();
    }
    render() {
        /* const StaffWithId = ({ match }) => {
            return (
                //Show Staffdetail from staff.id filter
                <Staffdetail staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.filterID, 10))[0]}
                    isLoading={this.props.staffs.isLoading}
                    errMess={this.props.staffs.errMess} />);

        }; */
        const DeptsWithId = ({ match }) => {
            return (
                //Show Staffdetail from staff.id filter
                <DepartmentDetail staffs={this.props.staffs.staffs.filter((staff) => staff.departmentId === match.params.filterID)}
                />);
        };
        return (
            <div className="App">
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            {/*Link to Stafflist*/}
                            <Route exact path='/stafflist' component={() => <Stafflist staffs={this.props.staffs} postNewStaff={this.props.postNewStaff} />} />
                            {/*Link to Staffdetail when click Staffid*/}
                            {/* <Route path='/stafflist/:filterID' component={StaffWithId} /> */}
                            {/*Link to Deparment*/}
                            <Route exact path='/dept' component={() => <Deparment depts={this.props.depts} />} />
                            <Route path='/dept/:filterID' component={DeptsWithId} />
                            {/*Link to Salary*/}
                            <Route exact path='/salary' component={() => <Salary salary={this.props.salary} />} />
                            {/*Default link*/}
                            <Redirect to='/stafflist' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
