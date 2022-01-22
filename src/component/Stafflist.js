import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';


class Stafflist extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null
    }
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderStaff(staff) {
    if (staff != null)
      return (
        <Card>
          <CardBody style={{ textAlign: "left" }}>
            <CardTitle>Họ và tên: {staff.name}</CardTitle>
            <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
            <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
            <CardText>Phòng ban {staff.department.id}</CardText>
            <CardText>Số ngày nghỉ {staff.annualLeave}</CardText>
            <CardText>Số ngày đi làm thêm {staff.overTime}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }

  render() {
    const list = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={staff.id}
            onClick={() => this.onStaffSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {list}
          <div className="col-12 col-md-5 m-1">
            {this.renderStaff(this.state.selectedStaff)}
          </div>
        </div>
      </div>
    );
  }
}
export default Stafflist;

