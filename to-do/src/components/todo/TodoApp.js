import React, { Component } from 'react'

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                <LoginComponent />
            </div>
        )
    }
}

class LoginComponent extends Component {
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
        if(this.state.username === "chekwa" && this.state.password === "123"){
            alert("Login Successful");
        }
        else{
            alert("Invalid credentials");
        }
    }

    render() {
        return (
            <div>
                <label for="username">User Name:</label>
                <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}