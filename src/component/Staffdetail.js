import React, { Component } from 'react';
import {
    Card, CardText, CardBody, CardTitle, CardImg, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent'

class Staffdetail extends Component {
    render() {
        //create {staff}
        const { staff } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {/*Create Breadcrumb*/}
                    <Breadcrumb>
                        {/*Link to /stafflist*/}
                        <BreadcrumbItem><Link to="/stafflist">Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    {/*call function renderStaff*/}
                    {this.renderStaff(staff)}
                </div>

            </div>
        );
    }
    renderStaff(staff) {
        if (this.props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (staff != null) //staff clicked
            return (
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-sm-4 col-md-3'>
                            {/*Show staff image*/}
                            <Card
                                style={{ margin: "10px 0px" }}
                                color="warning"
                                outline>
                                <CardImg width="100%" src={staff.image} alt={staff.name} />
                            </Card>
                        </div>
                        <div className='col-12 col-sm-8 col-md-9'>
                            {/*Show staff detail*/}
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
                                        <li><CardText>Phòng ban: {staff.department.name}</CardText></li>
                                        <li><CardText>Số ngày nghỉ: {staff.annualLeave}</CardText></li>
                                        <li><CardText>Số ngày đi làm thêm: {staff.overTime}</CardText></li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>

            );
        else
            return (
                <div></div>
            );
    }
}
export default Staffdetail;