import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import './App.css';
import Stafflist from "./component/Stafflist";
import { STAFFS } from "./shared/staffs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS //staffs = STAFFS import from staffs.jsx
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar color="warning" //Add Navbar
          expand="md"
          full
          light>
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lí nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <div>
          <Stafflist staffs={this.state.staffs} />
        </div>
      </div>
    );
  }
}

export default App;
