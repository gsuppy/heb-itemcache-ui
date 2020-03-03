import React from 'react';
import '../styles/Cache.css';
import Card from 'react-bootstrap/Card';

export interface CacheProps { cached: Array<string>; }
export interface CacheState { } 

export class Cache extends React.Component<CacheProps, CacheState> {
  constructor(props: CacheProps) {
    super(props);
  }

  render() {
    return (
      <div className="Cache">
        <Card>
          <Card.Header as="h3">Cache List</Card.Header>
          <Card.Body>
            <div className="Cache-list">
              <Card.Title>Cached Query</Card.Title>
              <Card.Text className="Cache-text">
                {this.props.cached}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Cache;
