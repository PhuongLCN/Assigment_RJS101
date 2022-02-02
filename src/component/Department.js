import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardTitle, CardText, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
class Deparment extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        //khởi tạo biến list map theo từng staff
        const department = this.props.depts.map((dept) => {
            return ( //hiển thị thông tin "name" toàn bộ nhân viên trong staffs.jsx        
                <div className="col-12 col-sm-6 col-md-4">
                    <Card
                        style={{ margin: "10px 0px" }}
                        body
                        color="warning"
                        outline>
                        <CardTitle tag="h5" style={{ textAlign: "center" }}>{dept.name}</CardTitle>
                        <CardText style={{ textAlign: "center" }}>Số lượng nhân viên {dept.numberOfStaff}</CardText>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/stafflist">Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Phòng ban</h3>
                        <hr />
                    </div>
                    {/*hiển thị deparment*/}
                    {department}
                </div>
            </div>

        );
    }
}



export default Deparment;