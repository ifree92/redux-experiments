export function createStore(reducer, initialState) {
    let state = initialState;
    let callbacks = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        callbacks.forEach(callbacks => callbacks());
    };

    const subscribe = (cb) => {
        callbacks.push(cb);
        return () => callbacks.filter((_cb) => _cb !== cb);
    };

    dispatch({});

    return {getState, dispatch, subscribe};
}
