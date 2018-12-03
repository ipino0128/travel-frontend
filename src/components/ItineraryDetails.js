import React from 'react'

const ItineraryDetails = (props) => {
  return(
    props.itinerary ?
    <div className="ItinDetails">
    <h1>{props.itinerary.title} </h1>
    <p> Created by: </p>
    <img src={props.itinerary.img_url} alt="h"/>
    <p>{props.itinerary.description} </p>
    </div>
    : null
  )
}

export default ItineraryDetails
