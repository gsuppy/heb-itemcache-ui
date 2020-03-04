import React from 'react';
import '../styles/Queries.css';
import Card from 'react-bootstrap/Card';

export interface QueriesProps { prodId: string, type: string, brand: string, longDescription: string, displayName: string, pic: string}
export interface QueriesState {} 

export class Queries extends React.Component<QueriesProps, {}> {

  constructor(props: QueriesProps) {
    super(props);
  }

  render() {
    let body;
    if (this.props.prodId == ''){
      body = 
      <Card.Body>
        <div className="row">
          <div className="col-md-4">
            {<img src={this.props.pic} />}
          </div>
          <div className="col-md-6 offset-md-1">
            <h4 className="text-secondary">Please search for a valid item</h4>
          </div>
        </div>
      </Card.Body>
      ;
    }
    else{
      body =           
      <Card.Body>
        <div className="row">
          <div className="col-md-4">
            {<img src={this.props.pic} />}
          </div>
          <div className="col-md-6 offset-md-1">
            <h1>{this.props.displayName}</h1>
            <h4 className="text-secondary">Product by {this.props.brand}</h4>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning mr"></i>
            <a href="javascript:void(0);">109 customer reviews</a>
            <hr/>
            <h5><b>Item Description</b></h5>
            <p>
              <b>Product ID: </b>{this.props.prodId}
              <br/>
              <b>Type: </b>{this.props.type}
            </p>
            <p>{this.props.longDescription}</p>
          </div>
        </div>
      </Card.Body>;
    }
  
    return (
      <div className="Queries">
        <Card>
          <Card.Header as="h3">Item Details</Card.Header>
          {body}
        </Card>
      </div>
    )
  }
}

export default Queries;
