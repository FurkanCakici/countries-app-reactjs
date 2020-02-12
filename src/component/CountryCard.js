import React from 'react'
import { NavLink } from 'react-router-dom'


const CountryCard = ({ country }) => {
    return (
        <div className="card my-2 bg-light text-dark text-center">
            <div className="card-body">
                <NavLink to={`country${country.name}`}>
                    <h4 className="card-title h2"><img src={country.flag} className="img-sm" /> {country.name}</h4>
                </NavLink>
                <p className="h4">{country.nativeName}</p>
            </div>
        </div >

    )
}

export default CountryCard;
