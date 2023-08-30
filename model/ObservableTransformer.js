import {Observable} from "./Observable.js";

/**
 * Transformation of the value provided by observable.
 */
export class ObservableTransformer extends Observable {

    constructor(parent, transform) {
        super();
        this._parent = parent
        this._transform = transform
    }

    get() {
        return this._transform(this._parent.get());
    }

    observe(observer) {
        this._parent.observe(value => observer(this._transform(value)))
        return this
    }

    observeChanges(observer) {
        this._parent.observeChanges(value => observer(this._transform(value)))
        return this
    }

    trigger() {
        this._parent.trigger();
        return this
    }
}

export function transform(observable, transformer) {
    return new ObservableTransformer(observable, transformer)
}
