import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle, Button
} from 'reactstrap';
import dateFormat from 'dateformat';


class Stafflist extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null, //khởi tạo selectedStaff = null
      class_div: "col-12 col-md-4" //khởi tạo số cột ban đầu là 3 khi load page
    }
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff }); //selectedStaff = staff khi click vào button
  }

  onColumnChange(columnNum) {
    var temp = 12 / columnNum; //tính số cột theo button được chọn
    var changecol = "col-12 col-md-" + temp; //css cho số cột hiển thị
    this.setState({ class_div: changecol }); //class_div => changecol
  }

  renderStaff(staff) {
    if (staff != null) //khi click vào button "Xem thông tin"
      return ( //hiển thị thông tin nhân viên theo staff
        <Card
          color="warning"
          outline>
          <CardBody style={{ textAlign: "left" }}>
            <CardTitle tag="h5">Họ và tên: {staff.name}</CardTitle>
            <ul>
              <li><CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText></li>
              <li><CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText></li>
              <li><CardText>Phòng ban: {staff.department.id}</CardText></li>
              <li><CardText>Số ngày nghỉ: {staff.annualLeave}</CardText></li>
              <li><CardText>Số ngày đi làm thêm: {staff.overTime}</CardText></li>
            </ul>
          </CardBody>
        </Card>
      );
    else //khi không click vào button "Xem thông tin"
      return (
        <div></div>
      );
  }

  render() {
    //khởi tạo biến list map theo từng staff
    const list = this.props.staffs.map((staff) => {
      return ( //hiển thị thông tin "name" toàn bộ nhân viên trong staffs.jsx
        /*set số cột theo class_div */
        <div className={this.state.class_div}>
          <Card
            style={{ marginTop: "10px" }}
            body
            color="warning"
            outline>
            {/* hiển thị "name" nhân viên */}
            <CardTitle tag="h5">{staff.name}</CardTitle>
            {/* tạo button "Xem thông tin", khi click thì gọi hàm onStaffSelect(staff)*/}
            <Button key={staff.id}
              onClick={() => this.onStaffSelect(staff)}>Xem thông tin</Button>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        {/*Tạo button hiển thị thông tin theo số cột*/}
        <div className="row">
          <h6 style={{ textAlign: "left" }, { margin: "25px" }}>Số cột hiển thị:</h6>
        </div>
        <div className="row">
          <div style={{ marginTop: "0px" }, { marginLeft: "25px" }}>
            <Button
              onClick={() => this.onColumnChange(1)} //khi button "1" click gọi hàm onColumnChange(1)
              color="primary"
              outline
            >
              1
            </Button>
            {' '}
            <Button
              onClick={() => this.onColumnChange(2)}//khi button "2" click gọi hàm onColumnChange(2)
              outline>
              2
            </Button>
            {' '}
            <Button
              onClick={() => this.onColumnChange(3)}//khi button "3" click gọi hàm onColumnChange(3)
              color="success"
              outline
            >
              3
            </Button>
            {' '}
            <Button
              onClick={() => this.onColumnChange(4)}//khi button "4" click gọi hàm onColumnChange(4)
              color="info"
              outline
            >
              4
            </Button>
            {' '}
            <Button
              onClick={() => this.onColumnChange(6)}//khi button "6" click gọi hàm onColumnChange(6)
              color="warning"
              outline
            >
              6
            </Button>
          </div>

        </div>
        <div className="row">
          {/*hiển thị list*/}
          {list}
          <div className="col-12 col-md-12" style={{ marginTop: "10px" }}>
            {/*rederStaff(selectedStaff)*/}
            {this.renderStaff(this.state.selectedStaff)}
          </div>
        </div>
      </div >

    );
  }
}
export default Stafflist;

