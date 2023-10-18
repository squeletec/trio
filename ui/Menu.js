import {Content, state, toggle, div} from "../trio.js";

export class Menu extends Content {

    constructor(item, popup) {
        super(div(item, popup).get())
        this._displayed = state(false)
        this._item = item.onClick(toggle(this._displayed))
        this._popup = popup.position('absolute').display(this._displayed)
    }

    popup(...content) {
        this._popup.add(...content)
        return this
    }
}

export function menu(...content) {
    return new Menu(div(...content), div())
}
