import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthentificationService from './AuthentificationService'

export default class AuthenticateRoute extends Component {
    render() {
        if(AuthentificationService.isUserLoggedIn()){
            return <Route {...this.props} />
        }
        else{
            return <Redirect to="./login"/>
        }
    }
}
