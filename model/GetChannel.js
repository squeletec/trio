import {state} from "./StateModel.js";
import {usingUriTemplate} from "./functions.js";
import {Channel, fromJson} from "./Channel.js";
import {stateProxy} from "./PropertyModel.js";

/**
 * Get channel.
 */
class GetChannel extends Channel {

    constructor(uri, input, output) {
        super(usingUriTemplate(uri), input, output);
    }

    trigger() {
        this.request("GET").send()
        return this
    }

}

export function getChannel(uri, input = null, result = fromJson()) {
    return new GetChannel(uri, stateProxy(input), state(result))
}
