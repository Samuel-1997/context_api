import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    const navStyle = {
        color: 'pink'
    }
    return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <Link style={navStyle} to="/users">
            Users
        </Link>
      </ul>
    </div>
  </div>
</nav>

    )
}
