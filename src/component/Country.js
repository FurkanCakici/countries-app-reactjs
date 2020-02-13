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
            <div>
                <div className="col-12 col-sm-6 col-lg-4  my-2 mx-auto">
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