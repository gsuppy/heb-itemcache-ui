import React from 'react';
import '../styles/Cache.css';
import Card from 'react-bootstrap/Card';

function Cache() {
return (
  <div className="Cache">
    <Card>
      <Card.Header as="h3">Cache List</Card.Header>
      <Card.Body>
        <div className="Cache-list">
          <Card.Title>Cached Query</Card.Title>
          <Card.Text className="Cache-text">
          Time of query
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  </div>
  );
}

export default Cache;
