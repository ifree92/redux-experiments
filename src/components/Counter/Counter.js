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

const incrementAction = {type: "INCREMENT", amount: 1};
const decrementAction = {type: "DECREMENT", amount: 1};
const resetAction = {type: "RESET"};

// ============= /redux actions =============

export default class extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate();
        });
    }

    increment = () => {
        store.dispatch(incrementAction);
    };


    decrement = () => {
        store.dispatch(decrementAction);
    };

    reset = () => {
        store.dispatch(resetAction);
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
            </div>
        )
    }
}