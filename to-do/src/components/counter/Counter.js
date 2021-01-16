import React, { Component } from 'react'
import "./Counter.css"

export default class Counter extends Component{
    constructor(props){
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        
        this.state = {
            counter: 0
        }
    }

    increment(by){
        this.setState((prevState) => {
            return {counter: prevState.counter + by}
        });
    }

    decrement(by){
        this.setState((prevState) => {
            return {counter: prevState.counter - by}
        });
    }

    reset(){
        this.setState({counter: 0});
    }

    render(){
        return (
          <div className="App">
            <CounterButton className="mt-5" incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <div className="count">{this.state.counter}</div>
            <div><button className="resetBtn" onClick={this.reset}>Reset</button></div>
          </div>
        );
    }
}

class CounterButton extends Component {
    constructor(props){
        super(props);

        this.state = {
            counter: 0
        }
    }

    render(){
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    }
    
}

// class CounterButton extends Component {
//     constructor(props){
//         super(props);

//         this.increment = this.increment.bind(this);
//         this.decrement = this.decrement.bind(this);

//         this.state = {
//             counter: 0
//         }
//     }

//     increment(){
//         this.setState({counter: this.state.counter + this.props.by});
//         this.props.incrementMethod(this.props.by);
//     }

//     decrement(){
//         this.setState({counter: this.state.counter - this.props.by});
//         this.props.decrementMethod(this.props.by);
//     }

//     render(){
//         return (
//             <div className="counter">
//                 <button onClick={this.increment}>+{this.props.by}</button>
//                 <button onClick={this.decrement}>-{this.props.by}</button>
//             </div>
//         )
//     }
    
// }



CounterButton.defaultProps = {
    by: 1
}

