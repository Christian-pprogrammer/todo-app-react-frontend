import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from '../context/userContext';
function Navbar() {
  const {isLoggedIn} = useContext(userContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink to="/home" className="nav-link" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/todos" className="nav-link" >Todos</NavLink>
                    </li>
                    {isLoggedIn ? (
                        <li className="nav-item">
                            <NavLink to="/logout" className="nav-link" >Logout</NavLink>
                        </li>
                    ):(
                        <>
                            <li className="nav-item">
                                <NavLink to="/signup" className="nav-link" >Signup</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" >Login</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar