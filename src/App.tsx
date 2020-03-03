import React from 'react';
import Cache from './components/Cache';
import Nav from './components/Nav';
import Search from './components/search';
import Queries from './components/Queries';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Nav></Nav>
        <Search></Search>
      </div>
      <div className="BottomApp">
        <Cache></Cache>
        <Queries></Queries>
      </div>
    </div>
  );
}

export default App;
