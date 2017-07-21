import { incrementAction, decrementAction, resetAction } from "../../redux/actions";
import { connect } from 'react-redux'
import Counter from "./Counter";


const mapStateToProps = state => {
    return {
        count: state.count
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: amount => {
            dispatch(incrementAction(amount));
        },
        decrement: amount => {
            dispatch(decrementAction(amount));
        },
        reset: () => {
            dispatch(resetAction());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
