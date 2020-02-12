import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import CountryList from '../component/CountryList'


function Welcome() {
    return (
        <div>
            <Switch>
                <Redirect to="/home" />
            </Switch>
        </div>
    )
}

export default Welcome
