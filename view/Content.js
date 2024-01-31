import {isObservable} from "../model/Observable.js";

/**
 * Basic class representing DOM content.
 */
export class Content {

    constructor(node) {
        this._node = node
    }

    get() {
        return this._node
    }

    remove() {
        if(this._node.parentNode) this._node.parentNode.removeChild(this._node)
        return this
    }

    replace(replacement) {
        if(this._node.parentNode) this._node.parentNode.replaceChild(node(replacement), this._node)
        return this
    }

    prepend(content) {
        if(this._node.parentNode) this._node.parentNode.insertBefore(node(content), this._node)
    }

    addTo(target) {
        node(target).appendChild(this.get())
        return this
    }
    
}

/**
 * Autodetect input type, and transform it to DOM Node.
 * In case of Content get it's underlying DOM Node.
 * In case of Node itself, return it simply.
 * Anything else, return new text node with the text value set to the input.
 *
 * @param value
 * @returns {Node|*|Text}
 */
export function node(value) {
    if(value instanceof Content) return value.get()
    if(value instanceof Node) return value
    if(isObservable(value)) return observableTextNode(value)
    return document.createTextNode(value)
}

function observableTextNode(observable) {
    let n = document.createTextNode(observable.get())
    observable.observe(value => n.nodeValue = value, false)
    return n
}

export function text(value = '') {
    return content(isObservable(value) ? observableTextNode(value) : document.createTextNode(value))
}

export function content(node) {
    return new Content(node)
}
