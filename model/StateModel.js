import {Model} from "./Model.js";
import {isObservable} from "./Observable.js";

/**
 * Model holding the value representing current state.
 */
export class StateModel extends Model {

    constructor(initialValue) {
        super();
        this._value = initialValue
        this._observers = []
    }

    get() {
        return this._value;
    }

    observeChanges(observer) {
        this._observers.push(observer)
        return this
    }

    trigger() {
        this._observers.forEach(observer => observer(this._value))
        return this
    }

    set(newValue) {
        this._value = newValue
        return this.trigger()
    }

}


export function state(value = null) {
    return isObservable(value) ? value : new StateModel(value)
}
