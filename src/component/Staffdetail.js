import React, { Component } from 'react';
import {
    Card, CardText, CardBody, CardTitle, Button, CardImg,
} from 'reactstrap';
import dateFormat from 'dateformat';

class Staffdetail extends Component {
    render() {
        const { staff } = this.props;
        return (
            <div>
                {this.renderStaff(staff)}
            </div>
        );
    }
    renderStaff(staff) {
        if (staff != null) //khi click vào button "Xem thông tin"
            return ( //hiển thị thông tin nhân viên theo staff        
                <Card
                    color="warning"
                    outline
                    style={{marginBottom:"10px"}}>
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
        else //khi không click vào button "Xem thông tin"
            return (
                <div></div>
            );
    }
}
export default Staffdetail;