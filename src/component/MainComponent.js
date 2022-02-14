import { Navbar, NavbarBrand, InputGroup, InputGroupText, Input } from 'reactstrap';
import React, { Component } from 'react';
import Stafflist from "./Stafflist";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Staffdetail from './Staffdetail';
import { Switch, Route, Redirect } from 'react-router-dom';
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs"
import Deparment from './Department';
import Salary from './Salary';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS, //create staffs = STAFFS import from staffs.jsx
            depts: DEPARTMENTS //create depts = DEPARTMANET import from staffs.jsx
        };
        this.addNewStaff=this.addNewStaff.bind(this);   

    }

    addNewStaff(staff){        
        var newStaffs = this.state.staffs;
        newStaffs.push(staff);
        this.setState({
            staffs:newStaffs
          })
      }

    render() {
        const StaffWithId = ({ match }) => {
            return (
                //Show Staffdetail from staff.id filter
                <Staffdetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.filterID, 10))[0]} />);
        };
        return (
            <div className="App">
                <Header />                
                <Switch>
                    {/*Link to Stafflist*/}
                    <Route exact path='/stafflist' component={() => <Stafflist staffs={this.state.staffs} addNewStaff={this.addNewStaff} />} />
                    {/*Link to Staffdetail when click Staffid*/}
                    <Route path='/stafflist/:filterID' component={StaffWithId} />
                    {/*Link to Deparment*/}
                    <Route exact path='/dept' component={() => <Deparment depts={this.state.depts} />} />
                    {/*Link to Salary*/}
                    <Route exact path='/salary' component={() => <Salary staffs={this.state.staffs} />} />
                    {/*Default link*/}
                    <Redirect to='/stafflist' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
