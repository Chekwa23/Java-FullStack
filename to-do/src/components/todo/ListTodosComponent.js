import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';

export default class ListTodosComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            todoLst: [
                {id: 1, description: "Learn React", done: false, targetDate: new Date()},
                {id: 2, description: "Learn Boostrap", done: false, targetDate: new Date()},
                {id: 3, description: "Learn Spring boot", done: false, targetDate: new Date()}
            ]
        }
    }

    render(){
        return(
            <div className="">
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Dead line</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todoLst.map(
                                    (todo, index) =>
                                    <tr key={index}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div> 
        )
    }
}