import React from 'react';
import Cache from './components/cache';
import Nav from './components/nav';
import Search from './components/search';
import Queries from './components/queries';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Nav></Nav>
        <Search></Search>
      </div>
      <div>
        <Cache></Cache>
        <Queries></Queries>
      </div>
    </div>
  );
}

export default App;
