import React from 'react'
import {Redirect} from 'react-router-dom'
import { Card, Image} from 'semantic-ui-react'
import ProfileItineraryContainer from './ProfileItineraryContainer'
import ProfileModal from '../components/ProfileModal'


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

      <h4> My Itineraries: </h4>
     <ProfileModal options={options} currentUser={currentUser}/>
      <br/>
      <br/>
   <ProfileItineraryContainer currentUser={currentUser} displayItineraryDetails={props.displayItineraryDetails}/>

   </div>
 ) : <Redirect to='/login' />
}

export default Profile;
