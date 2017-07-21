import "./counter.css";
import React, {Component} from "react";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {amount: 1};
    }

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
                <div className="count">{this.props.count}</div>
                <div className="buttons">
                    <div className="decrement" onClick={() => this.props.decrement(this.state.amount)}>-</div>
                    <div className="reset" onClick={this.props.reset}>Reset</div>
                    <div className="increment" onClick={() => this.props.increment(this.state.amount)}>+</div>
                </div>
                <input onKeyDown={this.onKeyDownAmount} value={this.state.amount} readOnly={true} type="text" ref="amount" size="1"/>
            </div>
        )
    }
}