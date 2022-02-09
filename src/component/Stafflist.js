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
    //create list map to STAFFS from staffs.jx => show stafflist
    const list = this.props.staffs.map((staff) => {
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
        <div className="row">
          <div className="col-12">
            <h3>Nhân viên</h3>
            <hr />
          </div>
          {/*show staff list*/}
          {list}
        </div>
      </div>

    );
  }
}

export default Stafflist;

