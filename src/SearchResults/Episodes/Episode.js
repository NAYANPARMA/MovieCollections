import React from 'react'
import './Episode.css'
const baseUrl = "https://image.tmdb.org/t/p/original/"


export const Episode = ({episode}) => {
    return (
        <div className='episode'>
            <div className='episode__left'>
                <h2>EP: {episode.episode_number}</h2>
                <img
                    src={`${baseUrl}${episode.still_path}`}
                />
            </div>
            <div className='episode__right'>
                <h2>{episode.name}</h2>
                <p>{episode.overview}</p>
            </div>  
        </div>
    )
}
