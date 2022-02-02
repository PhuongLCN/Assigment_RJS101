import React, { Component } from 'react';
import {
    Card, CardText, CardBody, CardTitle, Button, CardImg, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom'

class Salary extends Component {

    constructor(props) {
        super(props);
    }
    calSalary(x, y){
        const basicSalary = 3000000;
        const overTimeSalary = 200000;
        var salary=0;
        salary=(x*overTimeSalary+y*basicSalary).toFixed(0);
       return salary;        
    }
    render() {
        //khởi tạo biến list map theo từng staff
        
        const list = this.props.staffs.map((staff) => {
            return ( //hiển thị thông tin "name" toàn bộ nhân viên trong staffs.jsx        
                <div className="col-12 col-sm-6 col-md-4">
                    <Card
                        style={{ margin: "10px 0px" }}
                        body
                        color="warning"
                        outline>
                        <CardTitle tag="h5" style={{ textAlign: "left" }}>{staff.name}</CardTitle>
                        <CardText style={{ textAlign: "left" }}>Mã nhân viên: {staff.id}</CardText>
                        <CardText style={{ textAlign: "left" }}>Hệ số lương: {staff.salaryScale}</CardText>
                        <CardText style={{ textAlign: "left" }}>Số giờ làm thêm: {staff.overTime}</CardText>
                        <CardText style={{ textAlign: "left" }, { color: "red" }}>Lương: {this.calSalary(staff.overTime, staff.salaryScale)}</CardText>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/stafflist">Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Bảng lương</h3>
                        <hr />
                    </div>
                    {/*hiển thị list*/}
                    {list}
                </div>
            </div>

        );
    }
}

export default Salary;

