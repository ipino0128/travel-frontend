import React from 'react'
import {Redirect} from 'react-router-dom'
import { Card, Image} from 'semantic-ui-react'
import ProfileItineraryContainer from './ProfileItineraryContainer'

const Profile = (props) => {
  const options = props.destinations.map(destination => {
    return {key: destination.id, text: destination.name, value: destination.id}
  })

  let { currentUser } = props

 return currentUser ? (
   <div className="Profile">
   <h1> Welcome, {currentUser.username}</h1>
   <Card>
     <Image src={currentUser.avatar} />
     <Card.Content>
       <Card.Header>{currentUser.username}</Card.Header>

       <Card.Description>{currentUser.bio}</Card.Description>
     </Card.Content>
   </Card>


   <ProfileItineraryContainer
   currentUser={currentUser}
   displayItineraryDetails={props.displayItineraryDetails}
   options={options}
   addAllItin={props.addAllItin}
   removeFromAll={props.removeFromAll}/>

   </div>
 ) : <Redirect to='/login' />
}

export default Profile;
