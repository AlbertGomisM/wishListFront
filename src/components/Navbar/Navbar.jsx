import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import "./NavBar.css"

export const Navbar = () => {
    const {logout} = useAuth0()
  return (
    <div style={{display:"flex", gap:"1rem"}} className='divNav'>
        {/* <NavLink to={"/"}>Login</NavLink> */}
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/settings"}>Settings</NavLink>
        <button onClick={()=>logout({logoutParams: {returnTo: window.location.origin}})}>Log Out</button>
    </div>
  )
}
