import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AuthentificationService from "./AuthentificationService";


class HeaderComponent extends Component{
    render(){
        const loggedIn = AuthentificationService.isUserLoggedIn();

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark px-3">
                    <div><a className="navbar-brand">Todo</a></div>
                    <ul className="navbar-nav">
                        {loggedIn && <li><Link to="/welcome/chekwa" className="nav-link">Home</Link></li>}
                        {loggedIn && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!loggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {loggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthentificationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)