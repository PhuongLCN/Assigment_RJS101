import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import Stafflist from "./Stafflist";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { STAFFS } from "../shared/staffs";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS //staffs = STAFFS import from staffs.jsx
        };
    }
    render() {
        return (
            <div className="App">
                <Header />
                
                <div>
                    <Stafflist staffs={this.state.staffs} />                    
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
