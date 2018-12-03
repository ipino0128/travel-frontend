import React from 'react'
import {Link} from 'react-router-dom'

const ItineraryCard = (props) => {
  return(
    <div className='ui card column itineraryCard' onClick={()=>props.handleClick(props.itinerary)}>
      <img src={props.itinerary.img_url} className='ui image' alt="i"/>
      <div className='content'>
        <div className='header'>{props.itinerary.title}</div>
        <div className='description'>{props.itinerary.description}</div>
      </div>
      <Link to={`/itineraries/${props.itinerary.id}`}>
      <button data-itinerary-id={props.itinerary.id}>More Info</button>
    </Link>
    </div>
  )
}

export default ItineraryCard
