import "./counter.css";
import React, {Component} from "react";
import {createStore} from "../redux";

// ============= reducer =============

function reducer(state = {count: 0}, action) {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + action.amount};
        case "DECREMENT":
            return {count: state.count - action.amount};
        case "RESET":
            return {count: 0};
        default:
            return state;
    }
}

const store = createStore(reducer);

// ============= /reducer =============

// ============= redux actions =============

const incrementAction = (amount) => { return {type: "INCREMENT", amount} };
const decrementAction = (amount) => { return {type: "DECREMENT", amount} };
const resetAction = () => { return {type: "RESET"} };

// ============= /redux actions =============

export default class extends Component {

    constructor() {
        super();
        this.state = {amount: 1};
    }

    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate();
        });
    }

    increment = () => {
        store.dispatch(incrementAction(this.state.amount));
    };


    decrement = () => {
        store.dispatch(decrementAction(this.state.amount));
    };

    reset = () => {
        store.dispatch(resetAction());
    };

    onKeyDownAmount = (event) => {
        event.preventDefault();
        if (event.keyCode === 38) {
            this.setState({amount: this.state.amount + 1});
        } else if (event.keyCode === 40) {
            this.setState({amount: this.state.amount - 1});
        }
    };

    render() {
        return (
            <div className="counter">
                <div className="count">{store.getState().count}</div>
                <div className="buttons">
                    <div className="decrement" onClick={this.decrement}>-</div>
                    <div className="reset" onClick={this.reset}>Reset</div>
                    <div className="increment" onClick={this.increment}>+</div>
                </div>
                <input onKeyDown={this.onKeyDownAmount} value={this.state.amount} readOnly={true} type="text" ref="amount" size="1"/>
            </div>
        )
    }
}