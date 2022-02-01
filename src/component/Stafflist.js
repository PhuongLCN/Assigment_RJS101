import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle, Button, CardImg
} from 'reactstrap';
import dateFormat from 'dateformat';


class Stafflist extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null, //khởi tạo selectedStaff = null      
    }
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff }); //selectedStaff = staff khi click vào button
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
        <div className="col-6 col-sm-4 col-md-2">
          <Card
            style={{ marginTop: "10px" }}
            body
            color="warning"
            outline>
            {/* hiển thị "ảnh" nhân viên */}
            <CardImg width="100%" src={staff.image} alt={staff.name} />
            {/* hiển thị "name" nhân viên */}
            <CardTitle tag="h5">{staff.name}</CardTitle>
            {/* tạo button "Xem thông tin", khi click thì gọi hàm onStaffSelect(staff)*/}
            <Button key={staff.id}
              onClick={() => this.onStaffSelect(staff)}>Chi tiết</Button>
          </Card>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className="row">
          <div className='col-12'>
            <h2 style={{ textAlign: "left" }}>Danh sách nhân viên</h2>
          </div>
          {/*hiển thị list*/}
          {list}
          <div className="col-12 col-md-12" style={{ marginTop: "10px" }}>
            {/*rederStaff(selectedStaff)*/}
            {this.renderStaff(this.state.selectedStaff)}
          </div>
        </div>
      </div>

    );
  }
}
export default Stafflist;

