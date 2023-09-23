import {Model} from "./Model.js";
import {state} from "./StateModel.js";
import {properties} from "./functions.js";
import {transform} from "./ObservableTransformer.js";
import {TransformedState} from "./TransformedState.js";
import {stateProxy} from "./PropertyModel.js";

function observeRequest(method, uri, state, result) {
    let request = new XMLHttpRequest()
    state.set({state: XMLHttpRequest.UNSENT, loaded: 0, loading: false})
    request.onreadystatechange = () => {
        if(request.readyState === XMLHttpRequest.DONE) if(request.status === 200 || request.status === 0) try {
            result.set(request)
        } catch (error) {
            request.onerror(null)
        } else {
            request.onerror(null)
        }
    }
    request.onprogress = event => state.set({
        state: XMLHttpRequest.LOADING,
        total: event.total,
        loaded: event.loaded,
        loading: true
    })
    request.onerror = () => state.set({
        state: XMLHttpRequest.DONE,
        loading: false
    })
    request.open(method, uri.get())
    return request
}

/**
 * Class Channel represents channel for exchange data between the GUI and the server.
 */
export class Channel extends Model {

    constructor(uriMapping, input, output) {
        super();
        this.input = input
        this.uri = transform(transform(input, properties(encodeURIComponent)), uriMapping)
        this.output = output
        this.setStateModel(state({state: XMLHttpRequest.UNSENT, loading: false}))
    }

    request(method) {
        return  observeRequest(method, this.uri, this.stateModel, this.output)
    }

    setStateModel(stateModel) {
        this.stateModel = stateModel
        return this
    }

    set(newValue) {
        this.output.set(newValue);
        return this
    }

    get() {
        return this.output.get();
    }

    observe(observer) {
        this.output.observe(observer);
        return this
    }

    observeInput() {
        this.input.observe(() => this.trigger());
        return this
    }

}


export function fromJson(initialValue = null) {
    return stateProxy(new TransformedState(request => request == null ? null : JSON.parse(request.responseText), initialValue))
}

export function fromText(initialValue = null) {
    return new TransformedState(request => request == null ? null : request.responseText, initialValue)
}
