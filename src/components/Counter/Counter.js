import "./counter.css";
import React, {Component} from "react";
import actions from "../../redux/actions";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {amount: 1};
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            this.forceUpdate();
        });
    }

    increment = () => {
        this.props.store.dispatch(actions.incrementAction(this.state.amount));
    };


    decrement = () => {
        this.props.store.dispatch(actions.decrementAction(this.state.amount));
    };

    reset = () => {
        this.props.store.dispatch(actions.resetAction());
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
                <div className="count">{this.props.store.getState().count}</div>
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