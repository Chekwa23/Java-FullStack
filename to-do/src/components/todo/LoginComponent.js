import React, { Component } from 'react'
import AuthentificationService from "./AuthentificationService";
import HeaderComponent from './HeaderComponent';


export default class LoginComponent extends Component {
    constructor(props){
        super(props);

        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        
        this.state = {
            username: "",
            password: ""
        }
    }

    // handleUsernameChange(event){
    //     this.setState({username: event.target.value});
    // }

    // handlePasswordChange(event){
    //     this.setState({password: event.target.value});
    // }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    loginClicked(){
        if(this.state.username === "Chekwa" && this.state.password === "123"){
            AuthentificationService.registerSuccessfulLogin(this.state.username,this.state.password);
            alert("Login Successful");
            this.props.history.push(`/welcome/${this.state.username}`);
        }
        else{
            alert("Invalid credentials");
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}