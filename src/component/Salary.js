import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'

class Salary extends Component {

    constructor(props) {
        super(props);
    }
    //Calculator Salary
    /* calSalary(x, y) {
        const basicSalary = 3000000;
        const overTimeSalary = 200000;
        var salary = 0;
        salary = (x * overTimeSalary + y * basicSalary).toFixed(0);
        return salary;
    } */
    render() {
       //alert(JSON.stringify(this.props.salary.salary[0]))
        //create list map to STAFFS from staffs.jx
        const list = this.props.salary.salary.map((staff) => {
            return (
                <div className="col-12 col-sm-6 col-md-4">
                    {/*Create Staff Card*/}
                    <Card
                        style={{ margin: "10px 0px" }}
                        body
                        color="warning"
                        outline>
                        {/*Show staff name*/}
                        <CardTitle tag="h5" style={{ textAlign: "left" }}>{staff.name}</CardTitle>
                        {/*Show staff id*/}
                        <CardText style={{ textAlign: "left" }}>Mã nhân viên: {staff.id}</CardText>
                        {/*Show staff salaryScale*/}
                        <CardText style={{ textAlign: "left" }}>Hệ số lương: {staff.salaryScale}</CardText>
                        {/*Show staff overTime*/}
                        <CardText style={{ textAlign: "left" }}>Số giờ làm thêm: {staff.overTime}</CardText>
                        {/*Show staff salary from function calSalary*/}
                        <CardText style={{ textAlign: "left" }, { color: "red" }}>Lương: {staff.salary}</CardText>
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
                        <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Bảng lương</h3>
                        <hr />
                    </div>
                    {/*show staff list*/}
                    {list}
                </div>
            </div>

        );
    }
}

export default Salary;

