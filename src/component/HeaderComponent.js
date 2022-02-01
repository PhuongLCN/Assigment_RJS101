import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lí nhân sự</NavbarBrand>
        </div>
      </Navbar>
      
    </React.Fragment>
    );
  }
}

export default Header;