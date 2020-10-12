import React,{useEffect, useState} from 'react'
import axios from '../axios'
import Banner from '../Banner/Banner'
import requests from '../Requests/requests'

const baseUrl = "https://image.tmdb.org/t/p/original/"

const HomeBanner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        const fatchdata = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random()* request.data.results.length - 1 )
            ])
            // setMovie(request.data)
            return request
        }
        fatchdata()
    },[])

    return (
        <div>
            <Banner movie={movie}/>
        </div>
    )
}

export default HomeBanner
