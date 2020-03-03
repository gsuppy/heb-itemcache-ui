import React from 'react';
import Cache from './components/Cache';
import Nav from './components/Nav';
import Search from './components/Search';
import Queries from './components/Queries';
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
