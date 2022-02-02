import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import Stafflist from "./Stafflist";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Staffdetail from './Staffdetail';
import { Switch, Route, Redirect } from 'react-router-dom';
import { STAFFS } from "../shared/staffs";
import {DEPARTMENTS} from "../shared/staffs"
import Deparment from './Department';
import Salary from './Salary';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS, //staffs = STAFFS import from staffs.jsx
            depts: DEPARTMENTS
        };
    }

    render() {
        const StaffWithId = ({ match }) => {
            return (
                <Staffdetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.id, 10))[0]} />);
        };
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/stafflist' component={() => <Stafflist staffs={this.state.staffs} />} />
                    <Route exact path='/stafflist' component={() => <Stafflist staffs={this.state.staffs} />} />
                    <Route path='/stafflist/:id' component={StaffWithId} />
                    <Route exact path='/dept' component={() => <Deparment depts={this.state.depts} />} />
                    <Route exact path='/salary' component={() => <Salary staffs={this.state.staffs} />} />
                    <Redirect to='/stafflist' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
