import React, { Component } from 'react';
import {
    Card, CardTitle, CardImg, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

class DepartmentDetail extends Component {
    constructor(props) {
        super(props);        
    }
    render() {
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
                        {/* show staff image*/}
                        <CardImg width="100%" src={staff.image} alt={staff.name} />
                        {/* show staff name */}
                        <CardTitle tag="h5" style={{ textAlign: "center" }}>{staff.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        //create errors from validate function
        //const errors = this.validate(this.state.name, this.state.doB, this.state.startDate);
        return (
            <div className='container'>
                <div className="row">
                    {/*Create Breadcrumb*/}
                    <Breadcrumb>
                        {/*Link to /stafflist*/}
                        <BreadcrumbItem><Link to="/dept">Phòng ban</Link></BreadcrumbItem>                        
                    </Breadcrumb>
                </div>
                <div className="row">
                    {/*show staff list*/}
                    {list}
                </div>

            </div>
        );
    }
}

export default DepartmentDetail;