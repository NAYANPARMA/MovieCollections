import React from 'react'
import Banner from '../Banner/Banner'
import './Home.css'
import Rows from '../Rows/Rows'
import request from '../Requests/requests'
import HomeBanner from './HomeBanner'

const Home = () => {
    return (
      
      <div className="home">
        <HomeBanner/>
        <Rows title='Now Playing' fatchUrl={request.fetchNowPlaying} isLargeraw/>
         <Rows title='Upcoming' fatchUrl={request.fetchUpcoming} isLargeraw/>
        <Rows title='NETFLIX ORIGINALS' fatchUrl={request.fetchNetflixOriginals} isLargeraw/>
        <Rows title='TRENDING NOW' fatchUrl={request.fetchTrending}/>
        <Rows title='TOP RATED' fatchUrl={request.fetchTopRated} />
        <Rows title='ACTION MOVIES' fatchUrl={request.fetchActionMovies} />
        <Rows title='COMEDY MOVIES' fatchUrl={request.fetchComedyMovies} />
        <Rows title='DOCUMENTRY' fatchUrl={request.fetchDocumentaries} />
      </div>
    );
}

export default Home
