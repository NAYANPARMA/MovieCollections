import React,{useState} from 'react'
import MyModal from '../Mymodal/MyModal'
import './Banner.css'
import YouTube from 'react-youtube';
import axios from '../axios'
import movieTrailer from 'movie-trailer'

const baseUrl = "https://image.tmdb.org/t/p/original/"
const Banner = ({movie, addlist}) => {

    const [trailerUrl,setTrailerUrl] = useState("")

    const truncate = (str,n) => {
        return str?.length > n ? str.substr(0,n-1) + "..." : str
    }

    const[open , setOpen] = useState(false)
    const opts = {
        height: "400",
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
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get("v"))
            
        }).catch((error) => console.log(error));
        }
        setOpen(true)
    }

    return (
       
        <div className='banner'
            style={{
                backgroundSize:`cover`,
                 backgroundImage:`url(
                    ${baseUrl}${movie?.backdrop_path || movie?.poster_path}
                )`,
            }}
        >   
            
            <MyModal open={open} onClose={() => setOpen(false)}>
              { trailerUrl ? <YouTube videoId={trailerUrl} opts={opts}/> : <p style={{color:'white'}}>No Trailer Found</p>}
            </MyModal>
            
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button' onClick={()=>handleClick(movie)}>Play Trailer</button>
                    <button className='banner__button'>{addlist ? 'Add to Myist' : 'Mylist'}</button>
                </div>
                <h1 className='banner__description'>{truncate(movie?.overview,150)}</h1>
            </div>
            <div className='banner__fadebottom'></div>
        </div>
    )
}

export default Banner
