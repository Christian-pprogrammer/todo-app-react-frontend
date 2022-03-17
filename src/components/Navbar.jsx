import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <NavLink to="/" className="nav-link" >Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/todos" className="nav-link" >Todos</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/login" className="nav-link" >Login</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/signup" className="nav-link" >Signup</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/logout" className="nav-link" >Logout</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar