import React , { useEffect, useState}from 'react'
import {useParams} from 'react-router-dom'
import axios from '../axios'
import Banner from '../Banner/Banner'
import Rows from '../Rows/Rows'
import requests from '../Requests/requests'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import './SearchResult.css'
import Season from './Season'


const SearchResult = (props) => {

    const urlParams = useParams()
    const id = urlParams.id
    const [movie, setMovie] = useState([]);
    const [requestUrl , setrequestUrl] = useState('')
   
    useEffect(()=>{
        
        const fatchdata = async () => {
            let request = null
            let url = ''
            if(urlParams.type === 'movie'){
                request = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=26ce533749beac93b06c8febb6cac210&language=en-US`)
                url = `/movie/${id}/similar?api_key=26ce533749beac93b06c8febb6cac210&language=en-US&page=1`
            } else if (urlParams.type === 'tv') {
                request = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=26ce533749beac93b06c8febb6cac210&language=en-US`)
                url = `/tv/${id}/similar?api_key=26ce533749beac93b06c8febb6cac210&language=en-US&page=1`
            }
            setMovie(request.data)
            setrequestUrl(url)
            return request
        }
        fatchdata()
    },[id])

    
    console.log(movie.number_of_seasons);
    return (
        <div className='searchresult'>   


            <Banner movie={movie} addlist playtrailer/>

            {urlParams.type== 'tv' ?
                (   
                    <Season numberOfSeasons={movie.number_of_seasons} seasons={movie.seasons} tvid={id}/>
                    
                    ) : null
            }

            <Rows title="MORE LIKE THIS" fatchUrl={requestUrl} isLargeraw/>
           
            <Rows title='TRENDING NOW' fatchUrl={requests.fetchTrending}/>
            <Rows title='TOP RATED' fatchUrl={requests.fetchTopRated} /> 
        </div> 
    )
}

export default SearchResult
