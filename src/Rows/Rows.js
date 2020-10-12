import React, { useState , useEffect} from 'react';
import YouTube from 'react-youtube';
import axios from '../axios'
import movieTrailer from 'movie-trailer'
import './Rows.css'

const baseUrl = "https://image.tmdb.org/t/p/original/"
const Rows = ({title,fatchUrl, isLargeraw}) => {


  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("")
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fatchData = async() => {
      const request = await axios.get(fatchUrl)
      // setMovies(request.data.results)
      const movies = request.data.results.map((movie,i) => {
        return {
          ...movie,
          active:false,
          index:i
        }
      })
      setMovies(movies)
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

  const handleClick = (movie,index) => {

    let Movies = [ ...movies ] 

    Movies.map((m,i) => {
      if(index == i){
        m.active = !m.active
        setMovie(m)
      } else {
        m.active = false
      }
    } )


    setMovies(Movies)
    

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
        {movies.map((movie,i) => (
          <img
            key={movie.id}
            onClick={()=>handleClick(movie,i)}
            className={`row__poster ${isLargeraw && 'row__posterlarge'}`}
            src={`${baseUrl}${isLargeraw ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      { movie?.active && <div className = 'row__description'>
            <h2 onClick={() => handleClick(movie,movie.index)}>
              Description
            </h2>
            <div className='movie__description'>
              <div className='movie__title'>
                <h2><span className='description__title'>Title :</span> {movie.name}</h2>
                <h2><span className='description__title'>Relese Date  :</span> {movie.first_air_date}</h2>
              </div>
              <h2><span className='description__title'>Overview :</span>{movie.overview}</h2>
            </div>

        </div>
        }
      
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
};


export default Rows
