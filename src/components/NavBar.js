import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = (props) => {
  let { location: { pathname } } = props
  let logged_in = props.logged_in;
  let logout = props.logout
  return (
    <Menu pointing secondary>
      {logged_in ? (
        <Fragment>
         <div className='header item'>MyTravels</div>
        <Menu.Item
          as={NavLink}
          to="/"
          name="Home"
          active={pathname ==="/"}
          />
          <Menu.Item
            as={NavLink}
            to="/profile"
            name="My Profile"
            active={pathname === "/profile"}
          />
          <Menu.Menu position="right">
            <Menu.Item to="/logout" name="Logout" onClick={logout} />
          </Menu.Menu>
        </Fragment>
      ) : (
        <Fragment>
        <div className='header item'>MyTravels</div>
        <Menu.Item
          as={NavLink}
          to="/"
          name="Home"
          active={pathname ==="/"}
          />
        <Menu.Item
          as={NavLink}
          to="/login"
          name="Login"
          active={pathname === "/login"}
        />
        </Fragment>
      )}
    </Menu>
  );
};

export default withRouter(NavBar);

// import React from 'react'
// import {Link} from 'react-router-dom'
//
// const NavBar = () => {
//   return(
//     <div className='ui menu'>
//     <div className='header item'>Travel</div>
//     <Link className="item" to='/'>Home</Link>
//     <Link className="item" to='/profile'>My Profile</Link>
//   </div>
//   )
// }
//
// export default NavBar
