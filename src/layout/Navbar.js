import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <div >
            <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light h4" >
                <NavLink className="navbar-brand navbar-expand-md" to="/home" ><i className="fas fa-globe-asia fa-spin display-4" style={{ color: "#1B9CFC" }}></i></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ">
                        <NavLink className="nav-item nav-link" to="/home" activeclassname="active">ANASAYFA</NavLink>
                        <NavLink className="nav-item nav-link" to="/about" activeclassname="active">HAKKINDA</NavLink>
                        <NavLink className="nav-item nav-link" to="/contact" activeclassname="active">İLETİŞİM</NavLink>
                    </div>
                </div>
            </nav >
        </div>
    )
}

export default Navbar







