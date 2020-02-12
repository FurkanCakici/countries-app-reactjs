import React, { Component } from 'react'
import Axios from 'axios';

class Country extends Component {
    state = {
        country: {}
    }
    componentDidMount() {
        let name = this.props.match.params.name;
        Axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
            .then(response => {
                this.setState({
                    country: response.data[0]
                })
            })
    }

    render() {
        const { country } = this.state;
        return (
            <div className="container col-12 col-md-6 offset-md-3 col-md-8 offset-md-2  col-lg-10 offset-lg-1">
                <div className="card my-2 mx-auto" style={{ width: "60%", height: "50%" }}>
                    <img src={country.flag} alt="flags" className="card-img-top" />
                    <div className="card-body bg-light">
                        <ul className="list-group list-group-flush bg-light">
                            <li className="list-group-item h1 text-center bg-light text-dark">Ülke Adı : {country.name}</li>
                            <li className="list-group-item h3">Yerel Ad : {country.nativeName}</li>
                            <li className="list-group-item h3">Başkent : {country.capital}</li>
                            <li className="list-group-item h3">Nüfus : {country.population}</li>
                            <li className="list-group-item h3">Alan : {country.area} m2</li>
                            <li className="list-group-item h3">Saat Dilimi : {country.timezones}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Country;