import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Stafflist extends Component {

    constructor(props) {
        super(props);        
    }
    
    render() {
        const list = this.props.staffs.map((staff) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card>                 
                      <CardTitle>{staff.name}</CardTitle>                  
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {list}
                </div>                           
            </div>
        );
    }
}
export default Stafflist;
    
