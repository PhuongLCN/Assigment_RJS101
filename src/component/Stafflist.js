import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle, Button, CardImg,
} from 'reactstrap';
import { Link } from 'react-router-dom'

class Stafflist extends Component {

  constructor(props) {
    super(props);
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
            <Link to={`/stafflist/${staff.id}`}>
              {/* hiển thị "ảnh" nhân viên */}
              <CardImg width="100%" src={staff.image} alt={staff.name} />
              {/* hiển thị "name" nhân viên */}
              <CardTitle tag="h5" style={{ textAlign: "center" }}>{staff.name}</CardTitle>
            </Link>
          </Card>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <h3>Nhân viên</h3>
            <hr />
          </div>
          {/*hiển thị list*/}
          {list}
        </div>
      </div>

    );
  }
}

export default Stafflist;

