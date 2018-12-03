import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return(
    <div className='ui menu'>
    <div className='header item'>Travel</div>
    <Link className="item" to='/'>Home</Link>
    <Link className="item" to='/profile'>My Profile</Link>
  </div>
  )
}

export default NavBar
