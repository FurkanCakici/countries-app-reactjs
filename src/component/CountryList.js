import React, { Component } from 'react'
// import Data from '../Data'
import CountryCard from './CountryCard'
import Axios from 'axios'

class CountryList extends Component {
    state = {
        countries: []
    }

    componentDidMount() {
        Axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({
                    countries: response.data.slice(0, 54)
                })
            })
    }

    searchHandler = (e) => {
        Axios.get(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
            .then(response => {
                this.setState({
                    countries: response.data
                })
            })
    }

    render() {
        const { countries } = this.state;
        const countryList = countries.map(ct => {
            return (
                <CountryCard country={ct} key={ct.numericCode} />
            )
        })
        return (
            <div className="col-12 col-sm-11 col-lg-8 my-2 mx-auto">
                <input type="text" className="form-control bg-light text-dark" placeholder="Ülke adı giriniz" onChange={this.searchHandler}></input>
                <div className="card-columns my-1" >
                    {countryList}
                </div>
            </div >
        )
    }
}

export default CountryList
