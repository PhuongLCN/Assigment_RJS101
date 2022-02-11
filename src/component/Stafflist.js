import React, { Component, useState, useEffect } from 'react';
import {
  Card, Nav, NavItem, CardTitle, Button, CardImg, Label, Form, Input
} from 'reactstrap';
import { Link } from 'react-router-dom'


class Stafflist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ""
  };
    this.handleSearch = this.handleSearch.bind(this);

  }
  handleSearch(event) {
    event.preventDefault();
    this.setState({ searchKey: this.searchStaff.value }); 
  }
  render() {
    //create list map to STAFFS from staffs.jx => show stafflist    
    const list = this.props.staffs.filter((staff) => {
      if (this.state.searchKey == "") {
        return staff
      } else if (staff.name.toLowerCase().includes(this.state.searchKey.toLowerCase())) {
        return staff
      }
    }).map((staff) => {
      return (
        <div className="col-6 col-sm-4 col-md-2">
          {/* Create staff card */}
          <Card
            style={{ margin: "10px 0px" }}
            body
            color="warning"
            outline>
            {/* Link to staff.id */}
            <Link to={`/stafflist/${staff.id}`}>
              {/* show staff image*/}
              <CardImg width="100%" src={staff.image} alt={staff.name} />
              {/* show staff name */}
              <CardTitle tag="h5" style={{ textAlign: "center" }}>{staff.name}</CardTitle>
            </Link>
          </Card>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className="row" style={{ margin: "20px 0px" }}>
          <div className="col-7">
            <h3>Nhân viên</h3>
          </div>
          <div className="col-3">
            <Input type="text" id="searchStaff" name="search" placeholder="Tên..."
              innerRef={(input) => this.searchStaff = input} />
          </div>
          <div className="col-1">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Form>
                  <Button onClick={this.handleSearch} color="info" type="submit"><span className="fa fa-search"></span> Tìm kiếm</Button>
                </Form>
              </NavItem>
            </Nav>
          </div>
        </div>
        <hr />
        <div className="row">
          {/*show staff list*/}
          {list}
        </div>
      </div>

    );
  }
}

export default Stafflist;

