export default {
    incrementAction: (amount) => { return {type: "INCREMENT", amount} },
    decrementAction: (amount) => { return {type: "DECREMENT", amount} },
    resetAction: () => { return {type: "RESET"} }
}