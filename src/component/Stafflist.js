import React, { Component } from 'react';
import {
  Card, Nav, NavItem, CardTitle, Button, CardImg, Label, Form, Input,
  Modal, ModalHeader, ModalBody, FormGroup, Col, FormFeedback
} from 'reactstrap';
import { Link } from 'react-router-dom'
var id = 15;

class Stafflist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      isModalOpen: false,
      name: "",
      department: "Sale",
      doB: null,
      startDate: null,
      salaryScale: "1",
      annualLeave: "0",
      overTime: "0",
      forceValidate: false,
      touched: {
        name: false,
        doB: false,
        startDate: false,
      }
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  }
  validate(name, doB, startDate) {
    const errors = {
      name: "",
      doB: null,
      startDate: null,
    };

    if (this.state.touched.name && name.length == 0) {
      errors.name = 'Yêu cầu nhập';
    }
    else if (this.state.touched.name && name.length <= 2) {
      errors.name = 'Yêu cầu hơn 2 kí tự';
    }
    else if (this.state.touched.name && name.length > 30) {
      errors.name = 'Yêu cầu dưới 30 kí tự';
    }
    if (this.state.touched.doB && doB == null) {
      errors.doB = 'Yêu cầu nhập';
    }
    if (this.state.touched.startDate && startDate == null) {
      errors.startDate = 'Yêu cầu nhập';
    }
    return errors;
  }
  handleSearch(event) {
    event.preventDefault();
    this.setState({ searchKey: this.searchStaff.value });
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
    this.setState({
      touched: { ...this.state.touched, ["name"]: true, ["doB"]: true, ["startDate"]: true }
    });
    const errors = this.validate(this.state.name, this.state.doB, this.state.startDate);
    if (this.state.name == "" || this.state.name.length <= 2 || this.state.name.length > 30 || this.state.doB == null || this.state.startDate == null) {
      this.state.forceValidate = true
    } else {
      this.state.forceValidate = false
    }
    if (this.state.forceValidate === false) {
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
        doB: {},
        startDate: {},
        salaryScale: "",
        annualLeave: "",
        overTime: ""
      });
    }

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
    const errors = this.validate(this.state.name, this.state.doB, this.state.startDate);
    return (
      <div className='container'>
        <div className="row" style={{ margin: "20px 0px" }}>
          <div className="col-sm-4 col-7">
            <h3>Nhân viên</h3>
          </div>
          <div className='col-sm-3 col-5' style={{ textAlign: "right" }}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={this.toggleModal}><span className="fa fa-plus"></span> Thêm</Button>
              </NavItem>
            </Nav>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Nhập thông tin nhân viên</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handleSubmitAdd}>
                  <FormFeedback>{errors.name}</FormFeedback>
                  <FormGroup row>
                    <Label htmlFor="name" md={3}><b>Tên</b></Label>
                    <Col md={9}>
                      <Input type="text" id="name" name="name"
                        value={this.state.name}
                        invalid={errors.name !== ""}
                        onBlur={this.handleBlur("name")}
                        onChange={this.handleInputChange}
                      />
                      <FormFeedback>{errors.name}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="doB" md={3}><b>Ngày sinh</b></Label>
                    <Col md={9}>
                      <Input type="date" id="doB" name="doB"
                        value={this.state.doB}
                        invalid={errors.doB !== null}
                        onBlur={this.handleBlur('doB')}
                        onChange={this.handleInputChange}
                      />
                      <FormFeedback>{errors.doB}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="startDate" md={3}><b>Ngày vào công ty</b></Label>
                    <Col md={9}>
                      <Input type="date" id="startDate" name="startDate"
                        value={this.state.startDate}
                        invalid={errors.startDate !== null}
                        onBlur={this.handleBlur('startDate')}
                        onChange={this.handleInputChange}
                      />
                      <FormFeedback>{errors.startDate}</FormFeedback>
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
          <div className="col-sm-3 col-7" style={{ textAlign: "right" }}>
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

