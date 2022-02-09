import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardTitle, CardText, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
class Deparment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //create department map to DEPARTMENTS from staffs.js
        const department = this.props.depts.map((dept) => {
            return (
                <div className="col-12 col-sm-6 col-md-4">
                    {/*create deparment card*/}
                    <Card
                        style={{ margin: "10px 0px" }}
                        body
                        color="warning"
                        outline>
                        {/*show department name*/}
                        <CardTitle tag="h5" style={{ textAlign: "center" }}>{dept.name}</CardTitle>
                        {/*show department numberofstaff*/}
                        <CardText style={{ textAlign: "center" }}>Số lượng nhân viên {dept.numberOfStaff}</CardText>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className="row">
                    {/*Create Breadcrumb*/}
                    <Breadcrumb>
                        {/*Link to /stafflist*/}
                        <BreadcrumbItem><Link to="/stafflist">Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Phòng ban</h3>
                        <hr />
                    </div>
                    {/*Show department list*/}
                    {department}
                </div>
            </div>

        );
    }
}



export default Deparment;