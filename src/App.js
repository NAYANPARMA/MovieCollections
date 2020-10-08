import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './HOME/Home';
import Rows from './Rows/Rows';
import request from './Requests/requests'
import Banner from './Banner/Banner';

function App() {
  
  return (
    <div className="app">
      <Header/>
      <Banner/>
      {/* <Home/> */}
      <Rows title='NETFLIX ORIGINALS' fatchUrl={request.fetchNetflixOriginals} isLargeraw/>
      <Rows title='TRENDING NOW' fatchUrl={request.fetchTrending}/>
      <Rows title='TOP RATED' fatchUrl={request.fetchTopRated} />
      <Rows title='ACTION MOVIES' fatchUrl={request.fetchActionMovies} />
      <Rows title='COMEDY MOVIES' fatchUrl={request.fetchComedyMovies} />
      <Rows title='DOCUMENTRY' fatchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
