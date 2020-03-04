import React from 'react';
import '../styles/Cache.css';
import Card from 'react-bootstrap/Card';

export interface CacheProps { cached: Array<string>; timestamp: Array<string>; }
export interface CacheState { } 



export class Cache extends React.Component<CacheProps, CacheState> {

  render() {
    let queryList = [];
    for (let i = 0; i < this.props.cached.length; i++) {
      queryList.push(
      <div className="Cache-list">
      <Card.Title>{this.props.cached[i]}</Card.Title>
      <Card.Text className="Cache-time">{this.props.timestamp[i]}</Card.Text>
      </div>
    )
      
    };

    return (
      <div className="Cache">
        <Card>
          <Card.Header as="h3">Cache List</Card.Header>
          <Card.Body>
            {queryList}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Cache;
