import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './HOME/Home';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import SearchResult from './SearchResults/SearchResult';

function App() {


  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path='/searchresult/:type/:id'>
          <Header/>
          <SearchResult/>
        </Route>
        <Route path='/'>
          <Header/>
          <Home/>
        </Route>
      </Switch>
      </div>
    </Router>

    
  );
}

export default App;
