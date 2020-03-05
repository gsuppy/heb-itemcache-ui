import React from 'react';
import Nav from './components/Nav';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="container-fluid">
        <div className="v2-banner col-md-12">
          <Alert className="center-banner" variant="success">
            Banner!
          </Alert>
        </div>
        <Search>
        </Search>
      </div>
    </div>
  );
}

export default App;
