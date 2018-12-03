import React from 'react'

const DestinationContainer = (props) => {
  return(
    <div className="four wide column">
    <h3>Destinations: </h3>
      <div role='list' className='ui divided animated middle aligned list'>
      {props.destinations.map(destination => {
        return (
          <div role='listitem' className='item'
            key={destination.id}
            onClick={()=>props.displayDetails(destination)}>
            <p className="header"> {destination.name} </p>
          </div>)}
        )
      }
      </div>
    </div>
  )
}

export default DestinationContainer
