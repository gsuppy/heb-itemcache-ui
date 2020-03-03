import React from 'react';
import Cache from './components/cache';
import Nav from './components/nav';
import Search from './components/search';
import Queries from './components/queries';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="container">
        <Search></Search>
        <Cache></Cache>
        <Queries></Queries>
      </div>
    </div>
  );
}

export default App;
