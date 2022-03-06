import React, { Component } from 'react';
import {
    Card, CardText, CardBody, CardTitle, CardImg, Breadcrumb, BreadcrumbItem, Button
} from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { deleteStaff } from '../redux/ActionCreators';

class Staffdetail extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(value) {
        this.props.deleteStaff(value);
    }

    render() {
        //create {staff}
        const { staff } = this.props;
        return (
            <div className="container">
                <div>
                    {/*call function renderStaff*/}
                    {this.renderStaff(staff)}
                </div>

            </div>
        );
    }

    renderStaff(staff) {

        if (this.props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (staff != null) //staff clicked
        {
            var deptName = '';
            if (staff.departmentId == 'Dept01') {
                deptName = 'Sale'
            } else if (staff.departmentId == 'Dept02') {
                deptName = 'HR'
            } else if (staff.departmentId == 'Dept03') {
                deptName = 'Marketing'
            } else if (staff.departmentId == 'Dept04') {
                deptName = 'IT'
            }
            else if (staff.departmentId == 'Dept05') {
                deptName = 'Finance'
            }
                return (
                    <div className="container">
                        <div className="row">
                            {/*Create Breadcrumb*/}
                            <Breadcrumb>
                                {/*Link to /stafflist*/}
                                <BreadcrumbItem><Link to="/stafflist">Nhân viên</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        <div className="row">
                            <div className='col-12 col-sm-4 col-md-3'>
                                {/*Show staff image*/}
                                <FadeTransform
                                    in
                                    transformProps={{
                                        exitTransform: 'scale(0.5) translateY(-50%)'
                                    }}>
                                    <Card
                                        style={{ margin: "10px 0px" }}
                                        color="warning"
                                        outline>
                                        <CardImg width="100%" src={staff.image} alt={staff.name} />
                                    </Card>
                                </FadeTransform>
                                <Button onClick={() => this.handleDelete(staff.id)} color="info" style={{ margin: "5px" }}>Xóa</Button>
                                
                            </div>
                            <div className='col-12 col-sm-8 col-md-9'>
                                {/*Show staff detail*/}
                                <Card
                                    style={{ margin: "10px 0px" }}
                                    body
                                    color="warning"
                                    outline>
                                    <CardBody style={{ textAlign: "left" }}>
                                        <Stagger in>
                                            <CardTitle tag="h5">Họ và tên: {staff.name}</CardTitle>
                                            <ul>
                                                <Fade in>
                                                    <li><CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText></li>
                                                    <li><CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText></li>
                                                    <li><CardText>Phòng ban: {deptName}</CardText></li>
                                                    <li><CardText>Số ngày nghỉ: {staff.annualLeave}</CardText></li>
                                                    <li><CardText>Số ngày đi làm thêm: {staff.overTime}</CardText></li>
                                                </Fade>
                                            </ul>
                                        </Stagger>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>

                );
            }
        
        else
            return (
                <div></div>
            );
    }
}
export default Staffdetail;