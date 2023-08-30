import {Observable} from "./Observable.js";

/**
 * "Interface" for full motel, which is observable, and also allows to set the value explicitly.
 */
export class Model extends Observable {

    /**
     * Set value for the model.
     * @param newValue
     * @returns this
     */
    set(newValue) {
        throw new Error("Undeclared0 method set(newValue)")
    }

}