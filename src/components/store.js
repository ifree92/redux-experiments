class Store {
    constructor(updateState, state) {
        this._updateState = updateState;
        this._state = state;
        this._callbacks = [];
    }

    update(action) {
        this._state = this._updateState(this._state, action);
        this._callbacks.forEach((cb) => {
            cb();
        });
    }

    get state() {
        return this._state;
    }

    subscribe(cb) {
        this._callbacks.push(cb);
        return () => this._callbacks = this._callbacks.filter(_cb => _cb !== cb);
    }
}

export default Store;