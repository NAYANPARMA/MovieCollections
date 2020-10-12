import { Flag } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Season.css'
import axios from '../axios'
import { Episode } from './Episodes/Episode'

const baseUrl = "https://image.tmdb.org/t/p/original/"


const Season = ({numberOfSeasons, seasons,tvid}) => {

    const [ seasonDetails, setSeasons] = useState([])
    const [ episodes, setEpisodes] = useState([])
    const [showEpisode, setShow] = useState(false)

    useEffect(() => {
        const addSeasonData = async() => {
            let seasonDetails = []
            for(let i = 0 ; i< seasons?.length; i++){
                if(seasons[i]?.season_number){
                    const s = {
                        ...seasons[i],
                        active: seasons[i]?.season_number == 1 ? true : false
                    }
                    seasonDetails.push(s)
                }
            }
            setSeasons(seasonDetails)
            
        }
        addSeasonData()
    },[seasons])

    const handleChange = async(index) => {
        const seasondetails = [ ...seasonDetails ]
        console.log(seasondetails);
        seasondetails.map((season,i) => {
                if(i===index){
                    season.active = true

                } else {
                    season.active = false
                }
        })
        setSeasons(seasondetails)
        const result = await axios.get(`https://api.themoviedb.org/3/tv/${tvid}/season/${index+1}?api_key=26ce533749beac93b06c8febb6cac210&language=en-US`)
        setEpisodes(result.data.episodes);
        
    
    } 
    console.log(seasonDetails);

    const handleEpisode = async(n) => {
        const result = await axios.get(`https://api.themoviedb.org/3/tv/${tvid}/season/${n}?api_key=26ce533749beac93b06c8febb6cac210&language=en-US`)
        setEpisodes(result.data.episodes);
        setShow(!showEpisode)        
    }


    return (
        <div className='season'>
            <div className='season__title'>
                <h2 >Seasons</h2>
            </div>
            <div className='season__down'>
                 {Array(numberOfSeasons)
                    .fill()
                    .map((_, i) => (
                        <h2
                            onClick={()=>handleChange(i)}
                            className={ 
                            seasonDetails?.length && seasonDetails[i]?.active ? 'season__active' : '' }>
                             Season {i+1}</h2>
              ))}
            </div>
            {
                seasonDetails?.map((season,i) => {
                    
                    return season.active ? 
                        <div className='season__info'>
                            <div className='season__description'>
                                    <div className='season__descriptionleft'>
                                        <h2>{season.name}</h2>
                                        <img
                                            src={`${baseUrl}${season.poster_path}`}
                                        />
                                    </div>
                                    <div className='season__descriptionright'>
                                        <h2>Relese Date: { season.air_date}</h2>
                                        <p>{season.overview  ? season.overview : 'No Description Found'}</p>
                                    </div>
                            </div>
                            <div className='season_epinfo'>
                                <h2 onClick={()=> handleEpisode(i+1)}>Episodes</h2>
                                {showEpisode && episodes &&
                                    <div className='episodeInfo'>
                                    {
                                        episodes?.map((episode) => {
                                          return  <Episode episode={episode}/>
                                        })
                                    }
                                </div>
                                }
                            </div>
                        </div> : null
                })

            }
        
            
        </div>
    )
}

export default Season
