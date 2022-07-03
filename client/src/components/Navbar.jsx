import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = ({
  rootUser,
  setRootUser
}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Home Renting</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/feedback">Feedback</a>
          </li>
          {
            rootUser._id === null ? <>
          <li class="nav-item" style={{
            
          }}>
            <a class="nav-link " href="/register" >Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/login" >Login</a>
          </li> </> : <li class="nav-item">
            <a class="nav-link " href="/login" >Logout</a>
          </li> 
          }
        </ul>
        {/* <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}

export default Navbar