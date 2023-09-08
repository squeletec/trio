import {StateModel} from "./StateModel.js";

export class TransformedState extends StateModel {

    constructor(transformation, initialValue = null) {
        super(transformation(initialValue));
        this._transformation = transformation
    }

    set(newValue) {
        return super.set(this._transformation(newValue));
    }

}
