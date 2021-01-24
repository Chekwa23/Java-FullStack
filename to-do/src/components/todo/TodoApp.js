import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AuthenticateRoute from './AuthenticateRoute';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import LoginComponent from './LoginComponent';
import HelloWorldService from '../../api/todo/HelloWorldService.js'

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticateRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticateRoute path="/todos" component={ListTodosComponent}/>
                        <Route path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

class WelcomeComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            message: ""
        }
    }

    retrieveMessage = () => {
        // HelloWorldService.executeHelloWorldService().then(
        //     response => this.setState({message: response.data})
        // );
        
        // HelloWorldService.executeHelloWorldBeanService().then(
        //     response => this.setState({message: response.data.message})
        // );

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name).then(
            response => this.setState({message: response.data.message})
        ).catch(
            error => console.log(error)
        );
    }

    render(){
        return(
            <>
                <div>
                    <h1>Welcome {this.props.match.params.name}</h1>
                    <div className="container">Manage <Link to="/todos">Todos</Link></div>
                </div>
                <div className="mt-5">
                    <h3>Click here</h3>
                    <button onClick={this.retrieveMessage} className="btn btn-success btn-block">Welcome Message</button>
                </div>
                <div className="mt-5">
                    <h3>{this.state.message}</h3>
                </div>
            </>
        )
    }
}

class LogoutComponent extends Component{
    render(){
        return(
            <div>
                <h1>You are logged out</h1>
                <div className="container">Thank you</div>
            </div>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return(
            <footer className="footer">
                <span className="text-muted">All rights reserved</span>
            </footer>
        )
    }
}


function ErrorComponent() {
    return (
        <div>
            Contact Support
        </div>
    )
}
