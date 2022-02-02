import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen //do anything on this isNavOpen => true => open toggle
        });
    }
    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/stafflist'><span className="fa fa-users"></span> Nhân viên</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/dept'><span className="fa fa-list"></span> Phòng ban</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/salary'><span className="fa fa-money"></span> Bảng lương</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ứng dụng quản lí nhân sự</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
export default Header;