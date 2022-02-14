import React, { Component } from 'react';
import {
  Card, Nav, NavItem, CardTitle, Button, CardImg, Label, Form, Input,
  Modal, ModalHeader, ModalBody, FormGroup, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'
var DatePicker = require("reactstrap-date-picker");
var id = 15;

class Stafflist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      isModalOpen: false,
      name: "",
      department: "Sale",
      doB: new Date().toISOString(),
      startDate: new Date().toISOString(),
      salaryScale: "",
      annualLeave: "",
      overTime: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSearch(event) {
    event.preventDefault();
    this.setState({ searchKey: this.searchStaff.value });
  }
  handleChangeDoB(value, formattedValue) {
    this.setState({
      doB: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"      
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }
  handleChangeStart(value, formattedValue) {
    this.setState({
      startDate: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"      
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmitAdd(event) {
    event.preventDefault();
    const newStaff = {
      id: ++id,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: { name: this.state.department },
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      image: '/assets/images/alberto.png',
    }
    this.props.addNewStaff(newStaff);
    this.setState({
      name: "",
      doB: "",
      startDate: "",
      salaryScale: "",
      annualLeave: "",
      overTime: ""
    });
  }
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
          <div className="col-4">
            <h3>Nhân viên</h3>
          </div>
          <div className='col-3' style={{ textAlign: "right" }}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={this.toggleModal}><span className="fa fa-plus"></span> Thêm nhân viên</Button>
              </NavItem>
            </Nav>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Nhập thông tin nhân viên</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handleSubmitAdd}>
                  <FormGroup row>
                    <Label htmlFor="name" md={3}><b>Tên</b></Label>
                    <Col md={9}>
                      <Input type="text" id="name" name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="dateofBirth" md={3}><b>Ngày sinh</b></Label>
                    <Col md={9}>
                      <DatePicker id="example-datepicker"
                        value={this.state.doB}
                        onChange={(v, f) => this.handleChangeDoB(v, f)} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="date" md={3}><b>Ngày vào công ty</b></Label>
                    <Col md={9}>
                      <DatePicker id="example-datepicker"
                        value={this.state.startDate}
                        onChange={(v, f) => this.handleChangeStart(v, f)} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="Dept" md={3}><b>Phòng ban</b></Label>
                    <Col md={9}>
                      <Input type="select" name="department"
                        value={this.state.department}
                        onChange={this.handleInputChange}>
                        <option>Sale</option>
                        <option>HR</option>
                        <option>Marketing</option>
                        <option>IT</option>
                        <option>Finance</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="salaryScale" md={3}><b>Hệ số lương</b></Label>
                    <Col md={9}>
                      <Input type="number" id="salaryScale" name="salaryScale"
                        value={this.state.salaryScale}
                        onChange={this.handleInputChange} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="annualLeave" md={3}><b>Số ngày nghỉ còn lại</b></Label>
                    <Col md={9}>
                      <Input type="number" id="annualLeave" name="annualLeave"
                        value={this.state.annualLeave}
                        onChange={this.handleInputChange}></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="overTime" md={3}><b>Số ngày làm thêm</b></Label>
                    <Col md={9}>
                      <Input type="number" id="overTime" name="overTime"
                        value={this.state.overTime}
                        onChange={this.handleInputChange}></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 10, offset: 5 }}>
                      <Button type="submit" color="primary">
                        Hoàn tất
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </ModalBody>
            </Modal>
          </div>
          <div className="col-3" style={{ textAlign: "right" }}>
            <Input type="text" id="searchStaff" name="search" placeholder="Tên..."
              innerRef={(input) => this.searchStaff = input} />
          </div>
          <div className="col-1" style={{ textAlign: "right" }}>
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

