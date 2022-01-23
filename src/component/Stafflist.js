import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
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
    else
      return (
        <div></div>
      );
  }

  render() {
    const list = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card
            body
            color="warning"
            outline>
            <CardTitle tag="h5">{staff.name}</CardTitle>
            <Button key={staff.id}
              onClick={() => this.onStaffSelect(staff)}>Xem thông tin</Button>
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

