import React, { Component } from 'react';
import Stafflist from "./Stafflist";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Staffdetail from './Staffdetail';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Deparment from './Department';
import Salary from './Salary';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        depts: state.depts,
    }
}
class Main extends Component {
    constructor(props) {
        super(props);
        this.addNewStaff = this.addNewStaff.bind(this);
    }
    addNewStaff(staff) {
        var newStaffs = this.props.staffs;
        newStaffs.push(staff);
        this.setState({
            staffs: newStaffs
        })
    }

    render() {
        const StaffWithId = ({ match }) => {
            return (
                //Show Staffdetail from staff.id filter
                <Staffdetail staff={this.props.staffs.filter((staff) => staff.id === parseInt(match.params.filterID, 10))[0]} />);
        };
        return (
            <div className="App">
                <Header />
                <Switch>
                    {/*Link to Stafflist*/}
                    <Route exact path='/stafflist' component={() => <Stafflist staffs={this.props.staffs} addNewStaff={this.addNewStaff} />} />
                    {/*Link to Staffdetail when click Staffid*/}
                    <Route path='/stafflist/:filterID' component={StaffWithId} />
                    {/*Link to Deparment*/}
                    <Route exact path='/dept' component={() => <Deparment depts={this.props.depts} />} />
                    {/*Link to Salary*/}
                    <Route exact path='/salary' component={() => <Salary staffs={this.props.staffs} />} />
                    {/*Default link*/}
                    <Redirect to='/stafflist' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
