import React, { Component } from 'react';
import {
  Card, Nav, NavItem, CardTitle, Button, CardImg, Label, Form, Input,
  Modal, ModalHeader, ModalBody, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form';

var id = 15; //create staffId from staffs.js
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
class Stafflist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      isModalOpen: false,
      name: "",
      department: "",
      doB: null,
      startDate: null,
      salaryScale: "1",
      annualLeave: "0",
      overTime: "0",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
  }
  //function for search staff when click Search Button
  handleSearch(event) {
    event.preventDefault();
    this.setState({ searchKey: this.searchStaff.value }); 
  }
  //function for add staff via modaltoggle when click Submit
  handleSubmitAdd(values) {
    //create newStaff
    alert('Current State is: ' + JSON.stringify(values));
    const newStaff = {
      id: ++id,
      name: values.name,
      doB: values.doB,
      salaryScale: values.salaryScale,
      startDate: values.startDate,
      department: { name: values.department },
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: '/assets/images/alberto.png',
    }
    //add newStaff to Stafflist
    alert('Current State is: ' + JSON.stringify(newStaff));
    this.props.addNewStaff(newStaff);
    //reset modaltoggle
    this.setState({
      name: "",
      doB: {},
      startDate: {},
      salaryScale: "",
      annualLeave: "",
      overTime: ""
    });
    // }
  }
  //open Modaltoggle when click "Add button"
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  render() {
    //create list map to STAFFS from staffs.jx => show stafflist    
    const list = this.props.staffs.filter((staff) => {
      if (this.state.searchKey == "") {
        return staff
      } else if (staff.name.toLowerCase().includes(this.state.searchKey.toLowerCase())) { //condition for searchKey
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
    //create errors from validate function
    //const errors = this.validate(this.state.name, this.state.doB, this.state.startDate);
    return (
      <div className='container'>
        <div className="row" style={{ margin: "20px 0px" }}>
          <div className="col-sm-4 col-7">
            <h3>Nhân viên</h3>
          </div>
          <div className='col-sm-3 col-5' style={{ textAlign: "right" }}>
            <Nav className="ml-auto" navbar>
              <NavItem> {/*creat toggleModal button */}
                <Button outline onClick={this.toggleModal}><span className="fa fa-plus"></span> Thêm</Button>
              </NavItem>
            </Nav>
            {/*ToggleModal form */}
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Nhập thông tin nhân viên</ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmitAdd(values)}>
                  <Row className="form-group">
                    <Label htmlFor="name" md={3}><b>Tên</b></Label>
                    <Col md={9}>
                      {/*Name input*/}
                      <Control.text model=".name" id="name" name="name"
                        className="form-control"
                        validators={{
                          required, minLength: minLength(3), maxLength: maxLength(29)
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                          required: 'Yêu cầu nhập ',
                          minLength: 'Yêu cầu hơn 2 ký tự',
                          maxLength: 'Yêu cầu dưới 30 ký tự'
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="" md={3}><b>Ngày sinh</b></Label>
                    <Col md={9}>
                      <Control model=".doB" type='date' id="doB" name="doB"
                        value={this.state.doB}
                        className="form-control"
                        validators={{ required }}
                      ></Control>
                      <Errors
                        className="text-danger"
                        model=".doB"
                        show="touched"
                        messages={{
                          required: 'Yêu cầu nhập'
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="startDate" md={3}><b>Ngày vào công ty</b></Label>
                    <Col md={9}>
                      <Control type='date' model=".startDate" id="startDate" name="startDate"
                        value={this.state.startDate}
                        className="form-control"
                        validators={{ required }}
                      />
                      <Errors
                        className="text-danger"
                        model=".startDate"
                        show="touched"
                        messages={{
                          required: 'Yêu cầu nhập'
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="Dept" md={3}><b>Phòng ban</b></Label>
                    <Col md={9}>
                      <Control.select model=".department" id="department" name="department"
                        className="form-control">
                        <option>--Chọn Phòng ban--</option>
                        <option>Sale</option>
                        <option>HR</option>
                        <option>Marketing</option>
                        <option>IT</option>
                        <option>Finance</option>
                      </Control.select>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="salaryScale" md={3}><b>Hệ số lương</b></Label>
                    <Col md={9}>
                      {/*Salary Scale input*/}
                      <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                        className="form-control"                        
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="annualLeave" md={3}><b>Số ngày nghỉ còn lại</b></Label>
                    <Col md={9}>
                      {/*Annual Leave input*/}
                      <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                        className="form-control"
                      ></Control.text>                     
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="overTime" md={3}><b>Số ngày làm thêm</b></Label>
                    <Col md={9}>
                      {/*Over Time input*/}
                      <Control.text model=".overTime" id="overTime" name="overTime"
                        className="form-control"
                      ></Control.text>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={{ size: 10, offset: 5 }}>
                      <Button type="submit" color="primary">
                        Hoàn tất
                      </Button>
                    </Col>
                  </Row>
                </LocalForm>
              </ModalBody>
            </Modal>
          </div>
          <div className="col-sm-3 col-7" style={{ textAlign: "right" }}>
            {/*create Search by Uncontrolled Form */}
            <Input type="text" id="searchStaff" name="search" placeholder="Tên..."
              innerRef={(input) => this.searchStaff = input} />
          </div>
          <div className="col-sm-1 col-5" style={{ textAlign: "right" }}>
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

