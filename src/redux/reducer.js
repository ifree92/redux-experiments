export default function (state = {count: 0}, action) {
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