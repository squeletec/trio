import {Model} from "./Model.js";
import {state} from "./StateModel.js";

export class PropertyModel extends Model {

    constructor(parent, name) {
        super();
        this._parent = parent
        this._name = name
    }

    set(newValue) {
        this._parent.get()[this._name] = newValue
        return this.trigger()
    }

    get() {
        return this._parent.get()?.[this._name];
    }

    observeChanges(observer) {
        this._parent.observeChanges(value => observer(value?.[this._name]))
        return this
    }

    trigger() {
        this._parent.trigger()
        return this
    }

    getName() {
        return this._name;
    }

}


export let stateProxyHandler = {
    get(target, name) {
        return (target[name] === undefined) ? target[name] = stateProxy(new PropertyModel(target, name)) : target[name]
    }
}

export function stateProxy(stateOrValue = null, proxyHandler = stateProxyHandler) {
    return new Proxy(state(stateOrValue), proxyHandler)
}
