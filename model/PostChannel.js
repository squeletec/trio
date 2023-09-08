import {state} from "./StateModel.js";
import {usingTemplate} from "./functions.js";
import {Channel, fromJson} from "./Channel.js";

/**
 * POST channel.
 */
class PostChannel extends Channel {

    constructor(uri, input, output) {
        super(usingTemplate(uri), state(input), output);
    }

    trigger() {
        this.request("POST").send(JSON.stringify(this.input.get()))
        return this
    }

}

export function postChannel(uri, input, result = fromJson()) {
    return new PostChannel(uri, input, result)
}
