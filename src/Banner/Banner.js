import React,{useEffect, useState} from 'react'
import axios from '../axios'
import requests from '../Requests/requests'
import './Banner.css'
const baseUrl = "https://image.tmdb.org/t/p/original/"
const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        const fatchdata = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random()* request.data.results.length - 1 )
            ])
            return request
        }
        fatchdata()
    },[])

    const truncate = (str,n) => {
        return str?.length > n ? str.substr(0,n-1) + "..." : str
    }

    return (
        <div className='banner'
            style={{
                backgroundSize:"cover",
                 backgroundImage:`url(
                    ${baseUrl}${movie?.backdrop_path}
                )`,
            }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{truncate(movie?.overview,150)}</h1>
            </div>
            <div className='banner__fadebottom'></div>
        </div>
    )
}

export default Banner
