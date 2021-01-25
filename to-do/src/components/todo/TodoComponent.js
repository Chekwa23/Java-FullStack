import React, { Component } from 'react'
import moment from 'moment'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthentificationService from './AuthentificationService.js';

export default class TodoComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            description: "",
            dueDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }

    componentDidMount(){
        if(this.state.id === -1){
            return;
        } 

        let name = AuthentificationService.getLoggedInUername();
        TodoDataService.retrieveTodo(name, this.state.id).then(
            response => this.setState({
                description: response.data.description,
                dueDate: moment(response.data.dueDate).format('YYYY-MM-DD')
            })
        )
    }

    onSubmit = (values) =>{
        let name = AuthentificationService.getLoggedInUername();
        let newTodo = {
            id: this.state.id,
            username: name,
            description: values.description,
            done: false,
            deadline: values.dueDate
        }

        if(this.state.id === -1){
            TodoDataService.createTodo(name, newTodo).then(
                () => this.props.history.push("/todos")
            );
        }
        else{
            TodoDataService.updateTodo(name, this.state.id, newTodo).then(
                () => this.props.history.push("/todos")
            );
        }
    }

    validate = (values) =>{
        let errors = {};
        if(!values.description){
            errors.description = "Enter Description";
        }
        else if(values.description.length < 5){
            errors.description = "Enter at least 5 characters in Description";
        }

        if(!moment(values.dueDate).isValid){
            errors.dueDate = "Enter a valid date";
        }

        return errors;
    }

    render() {
        // let description = this.state.description;
        // let dueDate = this.state.dueDate;
        let {description, dueDate} = this.state
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{
                            description: description,
                            dueDate: dueDate
                        }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false} 
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form className="mt-3">
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <ErrorMessage name="dueDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Due Date</label>
                                        <Field className="form-control" type="date" name="dueDate"></Field>
                                    </fieldset>
                                    <button className="btn btn-success mt-3" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
