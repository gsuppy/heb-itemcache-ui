import React from 'react';
import '../styles/Queries.css';
import Card from 'react-bootstrap/Card';

function Queries() {
  return (
    <div className="Queries">
      <Card>
        <Card.Header as="h3">Queries List</Card.Header>
        <Card.Body>
          <div className="Queries-list">
            <Card.Title>Cached Query</Card.Title>
            <Card.Text className="Queries-text">
            Time of query
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Queries;
