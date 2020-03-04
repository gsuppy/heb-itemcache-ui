import React from 'react';
import Nav from './components/Nav';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="container">
        <Search>
        </Search>
      </div>
    </div>
  );
}

export default App;
