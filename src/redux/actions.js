export const incrementAction = (amount) => {
    return {type: "INCREMENT", amount};
}

export const decrementAction = (amount) => {
    return {type: "DECREMENT", amount};
}

export const resetAction = () => {
    return {type: "RESET"};
}