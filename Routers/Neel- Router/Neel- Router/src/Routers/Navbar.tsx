import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/">Home</Link>    
        </li>
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
         
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Contact">Contact US</Link>
         
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/About">About</Link>
         
        </li>
      
      </ul>
    </div>
  </div>
</nav>
     

          
        </>


    )
}
