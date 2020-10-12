import React from 'react'
import { Link, useHistory,useParams } from 'react-router-dom';
import './MovieOptions.css'
const baseUrl = "https://image.tmdb.org/t/p/original/"


const MovieOptions = (props) => {

    const history = useHistory()
    const location = useParams()
    //console.log(location);

    const movie = props.movie
    const release_date = movie.release_date || movie.first_air_date;
    const movie__name = movie.original_title || movie.original_name;
    const id = movie.id
    const type = movie.media_type

    const gotomovie = () => {
        history.push({pathname:'/searchresult/'+type+'/'+id})
    }
    return (
        <div className='movie' onClick={gotomovie}>
            <div className='movie__left'>
                <img 
                    className='movie__image'
                    src ={`${baseUrl}${movie.poster_path}`}
                />
            </div>
            <div className='movie__right'>
                <h3 >{movie__name}</h3>
                <h3>{release_date?.split("-")[0]}</h3>
            </div>
        </div>
    )
}

export default MovieOptions
