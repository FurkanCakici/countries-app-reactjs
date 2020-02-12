import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light h4">
                <NavLink className="navbar-brand navbar-expand-sm" to="/home" ><i className="fas fa-globe-asia fa-spin display-4" style={{ color: "#1B9CFC" }}></i></NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <NavLink className="nav-item nav-link" to="/home" activeclassname="active">ANASAYFA</NavLink>
                        <NavLink className="nav-item nav-link" to="/about" activeclassname="active">HAKKINDA</NavLink>
                        <NavLink className="nav-item nav-link" to="/contact" activeclassname="active">İLETİŞİM</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
