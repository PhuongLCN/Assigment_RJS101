import React, { Component } from 'react';
import {
    Card, CardText, CardBody, CardTitle, Button, CardImg, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

class Staffdetail extends Component {
    render() {
        const { staff } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/stafflist">Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    {this.renderStaff(staff)}
                </div>

            </div>
        );
    }
    renderStaff(staff) {
        if (staff != null) //khi click vào button "Xem thông tin"
            return ( //hiển thị thông tin nhân viên theo staff  
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-sm-4 col-md-3'>
                            <Card
                             style={{ margin: "10px 0px" }}                             
                             color="warning"
                             outline>
                                <CardImg width="100%" src={staff.image} alt={staff.name} />
                            </Card>
                        </div>
                        <div className='col-12 col-sm-8 col-md-9'>
                            <Card
                                style={{ margin: "10px 0px" }}
                                body
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
                        </div>
                    </div>
                </div>

            );
        else //khi không click vào button "Xem thông tin"
            return (
                <div></div>
            );
    }
}
export default Staffdetail;