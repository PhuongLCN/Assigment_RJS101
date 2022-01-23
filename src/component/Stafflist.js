import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle, Button
} from 'reactstrap';
import dateFormat from 'dateformat';


class Stafflist extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
      class_div: "col-12 col-md-3 m-1"
    }
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  onColumnChange(columnNum) {
    var temp = 11 / columnNum;
    var changecol = "col-12 col-md-" + temp + " m-1";
    this.setState({ class_div: changecol });
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
        <div className={this.state.class_div}>
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
            <h6 style={{ textAlign:"right" }, { margin: "25px" }}>Số cột hiển thị</h6>          
          <div className="col-12 col-md-4">
            <div style={{ marginTop: "20px" }}>
              <Button
                color="primary"
                outline
              >
                1
              </Button>
              {' '}
              <Button outline>
                2
              </Button>
              {' '}
              <Button
                color="success"
                outline
              >
                3
              </Button>
              {' '}
              <Button
                color="info"
                outline
              >
                4
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          {list}
          <div className="col-12 col-md-12">
            {this.renderStaff(this.state.selectedStaff)}
          </div>
        </div>
      </div >

    );
  }
}
export default Stafflist;

