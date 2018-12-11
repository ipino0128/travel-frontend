import React from 'react'
import {Link} from 'react-router-dom'

const ItineraryCard = (props) => {

  const deleteItin = (event) => {
    let id = event.target.id
    fetch(`http://localhost:3000/itineraries/${id}`, {
      method: "DELETE"
    }).then(res=> res.json())
    .then(itinerary => {
      props.removeFromAll(itinerary)
      props.removeUserItin(itinerary)
    })
  }

  const deleteBtn=()=>{
      if (props.currentUser){
        if (props.currentUser.id === props.itinerary.user_id){
          if (props.removeFromAll && props.removeUserItin) {
              return <Link to={`/profile`}> <button className="delete" id={props.itinerary.id} onClick={deleteItin}>Delete</button> </Link>
          } else {
            return null
          }
        } else {
          return null
        }
      }
      else
      return null
  }

  return(
    <div className='ui card column itineraryCard' onClick={()=>props.handleClick(props.itinerary)}>
      <img src={props.itinerary.img_url} className='ui image' alt="i"/>
      <div className='content'>
        <div className='header'>{props.itinerary.title}</div>
        <div className='description-of-card'>{props.itinerary.description}</div>
      </div>
      <Link to={`/itineraries/${props.itinerary.id}`}>
      <button data-itinerary-id={props.itinerary.id}>More Info</button>
        {deleteBtn()}

    </Link>
    </div>
  )
}

export default ItineraryCard
