import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthentificationService from './AuthentificationService.js'
import moment from 'moment'

export default class ListTodosComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            todoLst: [
            //     {id: 1, description: "Learn React", done: false, targetDate: new Date()},
            //     {id: 2, description: "Learn Boostrap", done: false, targetDate: new Date()},
            //     {id: 3, description: "Learn Spring boot", done: false, targetDate: new Date()}
            ],
            deleteMessage: null
        }
    }

    componentDidMount(){
        let username = AuthentificationService.getLoggedInUername();
        this.refreshTodos(username);
    }

    refreshTodos = (username) =>{
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                // console.log(response);
                this.setState({todoLst: response.data})
            }
        );
    }

    deleteClickedTodo = (id) => {
        let name = AuthentificationService.getLoggedInUername();
        TodoDataService.deleteTodo(name, id).then(
            response => {
                this.setState({deleteMessage: `Deleted todo with id ${id}`});
                this.refreshTodos(name);
            }
        )
    }

    updateClickedTodo = (id) => {
        this.props.history.push(`/todos/${id}`);
    }

    addTodo = () => {
        this.props.history.push("/todos/-1");
    }



    render(){
        console.log(this.state.todoLst);
        return(
            <div className="">
                <h1>Todos</h1>
                {this.state.deleteMessage && <div className="alert alert-success">{this.state.deleteMessage}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Dead line</th>
                                <th>Completed</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todoLst.map(
                                    (todo, index) =>
                                    <tr key={index}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.deadline).format('YYYY-MM-DD')}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateClickedTodo(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteClickedTodo(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row mt-5">
                        <button className="btn btn-success" onClick={this.addTodo}>Add</button>
                    </div>
                </div>
                
            </div> 
        )
    }
}