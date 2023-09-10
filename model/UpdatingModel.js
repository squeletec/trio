import {Model} from "./Model.js"
import {state} from "./StateModel.js"

/**
 * Wrapper of any model, which would only trigger
 * observers if the ne value changed from previous one.
 */
export class UpdatingModel extends Model {

    constructor(delegate) {
        super()
        this._delegate = delegate
    }

    set(value) {
        if(this.get() !== value)
            this._delegate.set(value)
        return this
    }

    get() {
        return this._delegate.get()
    }

    observeChanges(observer) {
        this._delegate.observeChanges(observer)
        return this
    }

    trigger() {
        this._delegate.trigger()
        return this
    }

}

export function updatesOnly(value) {
    return new UpdatingModel(state(value))
}
