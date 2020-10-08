import React, { useState , useEffect} from 'react';
import YouTube from 'react-youtube';
import axios from '../axios'
import movieTrailer from 'movie-trailer'
import './Rows.css'

const baseUrl = "https://image.tmdb.org/t/p/original/"
const Rows = ({title,fatchUrl, isLargeraw}) => {


  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("")

  useEffect(() => {
    const fatchData = async() => {
      const request = await axios.get(fatchUrl)
      setMovies(request.data.results)
      return request
    };
    fatchData();
  }, [fatchUrl]);

  const opts = {
    height: "390",
    width:"100%",
    playerVars:{
      autoplay:1,
    }
  }

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.name || "").
      then( url => {
        console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get("v"))
        
      }).catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={`row__poster ${isLargeraw && 'row__posterlarge'}`}
            src={`${baseUrl}${isLargeraw ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
};


export default Rows
